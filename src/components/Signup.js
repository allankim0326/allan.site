import React, { useState } from "react";
import request from "axios";
import { URL } from "../constants";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(false);

  return (
    <div>
      <p>Username:</p>
      <input
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <p>Password:</p>
      <input
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <button onClick={signup} style={{ background: "orange", color: "white" }}>
        Sign Up
      </button>
    </div>
  );

  async function signup() {
    const {
      data: { alreadyExists, token }
    } = await request.post(`${URL}/users`, {
      username: username,
      password: password
    });
    setUserExists(alreadyExists);
    if (userExists) return;
    localStorage.setItem("token", token);
  }
}
