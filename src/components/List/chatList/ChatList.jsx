import AddUser from "./addUser/AddUser";

import "./chatList.css";
import React, { useState } from "react";

const ChatList = () => {
  const [addmode, setaddmode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img
          src={addmode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setaddmode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john doe</span>
          <p>hello</p>
        </div>
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john doe</span>
          <p>hello</p>
        </div>
      </div>
      {addmode && <AddUser />}
    </div>
  );
};

export default ChatList;
