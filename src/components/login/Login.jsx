import React, { useState } from "react";
import { toast } from "react-toastify";

import "./login.css";
const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // toast.error("Invalid email or password");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome</h2>
        <form onSubmit={handleLogin}>
          <input type="text" />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>

      <div className="item">
        <h2>create an Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="Password" name="password" id="" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
