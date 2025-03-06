import "./signup.css";

import React from "react";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3001/api/myInventory/signup",
      data: {
        email,
        username,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
        setEmail("");
        setUsername("");
        setPassword("");
      })
      .catch((err) => {
        err = new Error();
      });
  };

  return (
    <div>
      <div className="logo">my Inventory</div>
      <form className="form" method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form__input"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form__input"
          id="username"
          autoComplete="off"
        />
        <label htmlFor="username" className="form__label">
          Username
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form__input"
          id="password"
          autoComplete="off"
        />
        <label htmlFor="password" className="form__label">
          Password
        </label>
      </form>
      <div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="login-button"
          type="submit"
        >
          Register
        </button>
      </div>
      {register ? (
        <p className="register">
          you are registered successfully{" "}
          <a href={"http://localhost:3000/api/myInventory/login"}>Login here</a>
        </p>
      ) : (
        <p>
          register an account
          <a href={"http://localhost:3000/api/myInventory/login"}>Login here</a>
        </p>
      )}
    </div>
  );
};

export default Signup;
