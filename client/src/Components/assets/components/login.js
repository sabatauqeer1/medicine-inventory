import "./signup.css";
//packages
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let Navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setlogin] = useState(false);

  //credentials
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/myInventory/login",
        { username, password },
        { withCredentials: true }
      );

      setlogin(true);
      if (response.status === 200) {
        return Navigate("/api/myInventory/home/search");
      } else {
        return <p>Please enter correct email and password</p>;
      }
    } catch (error) {}
  };

  return (
    //login form

    <div>
      <form>
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

        <button type="submit" onClick={handleSubmit}>
          Login{" "}
        </button>
      </form>
    </div>
  );
};
export default Login;
