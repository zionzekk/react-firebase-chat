import "./detail.css";
import React from "react";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>tsion sekaryas</h2>
        <p>Lorem ipsum dolor sit amet .</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>chat setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>chat setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>privact & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://placecats.com/300/300" alt="Cat" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://placecats.com/300/300" alt="Cat" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://placecats.com/300/300" alt="Cat" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>

          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://placecats.com/300/300" alt="Cat" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
