const express = require('express') 
const app = express()
const cors = require('cors')
const server = require('http').createServer(app)
const socket = require('./socket').socket

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

PORT = 3001 || process.env.PORT

app.use(express.json())
app.use(cors())

// console.log('server/index.js: server', server)
socket(server)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})