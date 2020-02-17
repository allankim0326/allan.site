import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Soccer from "./components/Soccer";
import Videos from "./components/Videos";
import Gifs from "./components/Gifs";
import "./App.css";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/soccer" component={Soccer} />
        <Route path="/videos" component={Videos} />
        <Route path="/chat" component={Chat} />
        <Route path="/gifs" component={Gifs} />
      </div>
    </div>
  );
}
