import React, { useState } from "react";
import request from "axios";
export default function Modal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <p style={{ fontSize: "3rem" }}>Username: </p>
      <input
        value={username}
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <p style={{ fontSize: "3rem" }}>Password: </p>
      <input
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
        type="password"
      />
      <button onClick={login} style={{ background: "orange", color: "white" }}>
        Login
      </button>
    </div>
  );

  async function login() {
    console.log(username, password);
    try {
      const {
        data: { token }
      } = await request.get(
        `${URL}/users?username=${username}&password=${password}`
      );
      console.log(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
    }
  }
}
