"use client";

import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import dynamic from "next/dynamic";

const Room = () => {
  // const [stream, setStream] = useState<MediaStream | null>(null);
  // const [connected, setConnected] = useState<boolean>(false);
  // const [partnerId, setPartnerId] = useState<string | null>(null);

  const stream = useRef<any>(null);
  const userVideo = useRef<HTMLVideoElement | null>(null);
  const partnerVideo = useRef<HTMLVideoElement | null>(null);
  // const socket = useRef<any>(null);
  const partnerId = useRef<string | null>(null);

  const socket = io("http://localhost:3001");

  let videoStyle = {
    height: "40vh",
    width: "100%",
    backgroundColor: "black",
    top: "0px",
    // objectFit: "cover",
    overflow: "hidden",
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((nStream) => {
        stream.current = nStream;
        if (userVideo.current) {
          userVideo.current.srcObject = nStream;
        }
      });

    socket.emit("join");

    socket.on("ReceiveSignalOffer", (data: any) => {
      answerPeer(data);
    });

    socket.on("paired", (id: string, isFirst: any) => {
      partnerId.current = id;
      // socket.emit("hi", (id));
      console.log("Paired with: ", id);
      if (isFirst) {
        createPeer();
      }
    });

    // socket.on("hiR", (data) => {
    //   console.log("Hi received: ", data);
    // })
  }, []);

  function createPeer() {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: "stun:stun.l.google.com:19302",
          },
          {
            urls: "stun:stun1.l.google.com:19302",
          },
        ],
      },
      stream: stream.current,
    });

    socket.on("ReceiveSignalAnswer", (data: string) => {
      console.log("Received signal: ", data);
      peer.signal(data);

      peer.on("stream", (stream: any) => {
        if (partnerVideo.current) {
          partnerVideo.current.srcObject = stream;
        }
      });
    });

    peer.on("signal", (data: any) => {
      console.log("Sending signal: ", data);
      socket.emit("SendSignalOffer", partnerId.current, data);
    });
  }

  function answerPeer(uData: any) {
    // console.log("Answering peer");
    const peer = new Peer({
      initiator: false,
      trickle: false,
      config: {
        iceServers: [
          {
            urls: "stun:stun.l.google.com:19302",
          },
          {
            urls: "stun:stun1.l.google.com:19302",
          },
        ],
      },
      stream: stream.current,
    });

    peer.on("signal", (data: any) => {
      console.log("Sending signal: ", data);
      socket.emit("SendSignalAnswer", partnerId.current, data);
    });

    console.log("Received signal: ", uData);
    peer.signal(uData);

    peer.on("stream", (stream: any) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });
    // socket.on("ReceiveSignal", (data) => {
    //   console.log("Received signal: ", data);
    //   peer.signal(data);

    //   peer.on("stream", (stream: any) => {
    //     if (partnerVideo.current) {
    //       partnerVideo.current.srcObject = stream;
    //     }
    //   });
    // });
  }

  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-col h-screen justify-between items-center w-2/5 p-5">
        <video ref={userVideo} style={videoStyle} autoPlay playsInline muted />
        <div className="flex flex-row justify-around w-full">
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <video ref={partnerVideo} style={videoStyle} autoPlay playsInline />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Room), { ssr: false });
