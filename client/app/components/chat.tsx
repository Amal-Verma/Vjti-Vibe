import React from "react";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState("");

  const handleChange = (e: any) => {
    setChat(e.value);
  };

  return (
    <div>
      <div className="fixed flex flex-col-reverse h-screen w-1/2 pb-5 mx-10 right-0 bg-slate-400 overflow-auto">
        <div className="w-full">
          <textarea
            placeholder="Description"
            id="desArea"
            className="input input-bordered w-5/6 max-w-l py-2"
            style={{ resize: "none", height: "50px" }}
            value={chat}
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
        </div>

        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
