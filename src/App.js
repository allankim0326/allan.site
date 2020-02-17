import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Videos from "./components/Videos";
import Gifs from "./components/Gifs";
import Info from "./components/Info";
import "./App.css";
import { Route } from "react-router-dom";
import request from "axios";
import { URL } from "./constants";

export default function App() {
  const [userId, setUserId] = useState(undefined);
  const [username, setUsername] = useState("");

  useEffect(() => {
    initSession();
    async function initSession() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const {
            data: { userId, username }
          } = await request.get(`${URL}/users/session`, {
            headers: {
              authorization: token
            }
          });
          setUserId(userId);
          setUsername(username);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div>
        <div>
          {username} {userId}
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/videos" component={Videos} />
        <Route path="/chat" component={() => <Chat userId={userId} />} />
        <Route path="/gifs" component={Gifs} />
        <Route path="/info" component={Info} />
      </div>
    </div>
  );
}
