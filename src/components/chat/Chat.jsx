import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [open, setopen] = useState(false);
  const [text, settext] = useState("");

  const handleEmoji = (e) => {
    settext((prev) => prev + e.emoji);
    setopen(false);
  };
  console.log(text);

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>tsion</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>

        <div className="icon">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              labore autem dignissimos omnis illum pariatur similique doloremque
              soluta et praesentium ducimus quas cupiditate velit modi
              molestias, odit ratione libero ipsa!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              labore autem dignissimos omnis illum pariatur similique doloremque
              soluta et praesentium ducimus quas cupiditate velit modi
              molestias, odit ratione libero ipsa!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <img src="https://placecats.com/300/300" alt="Cat" />

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              labore autem dignissimos omnis illum pariatur similique doloremque
              soluta et praesentium ducimus quas cupiditate velit modi
              molestias, odit ratione libero ipsa!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              labore autem dignissimos omnis illum pariatur similique doloremque
              soluta et praesentium ducimus quas cupiditate velit modi
              molestias, odit ratione libero ipsa!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <input
          type="text"
          placeholder="type a message...."
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setopen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>

          <button className="sendButton">send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
