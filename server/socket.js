exports.socket = (server) => {
  const io = require('socket.io')(server,
    {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
    })
    // console.log('server/socket.js: io', io)
  const { v4: uuidv4 } = require('uuid');

  let lobby = []
   
  io.on('connection', (socket) => {
    console.log('a user connected', socket.id)
    
    socket.on('join', () => {

      lobby.push(socket) 
      
      if (lobby.length >= 2){
        const person1 = lobby.shift()
        const person2 = lobby.shift()
        
        person1.emit('paired', person2.id, true)
        person2.emit('paired', person1.id, false)
      }
      
      console.log("lobby ", lobby.length)
    })

    socket.on('disconnect', () => {
      lobby = lobby.filter((person) => person !== socket)
    })

    socket.on('SendSignalOffer', (id, data) => {
      // console.log('SendSignalOffer', id)
      socket.to(id).emit('ReceiveSignalOffer', data)
    })

    socket.on('SendSignalAnswer', (id, data) => {
      console.log('SendSignalAnswer', id)
      socket.to(id).emit('ReceiveSignalAnswer', data)
    })
})}