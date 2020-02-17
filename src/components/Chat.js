import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import request from "axios";
import { socket } from "../helpers/requestHelpers";
import { URL } from "../constants";

Chat.propTypes = {
  userId: PropTypes.number
};

export default function Chat({ userId }) {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    initPosts();
    async function initPosts() {
      try {
        const { data: messages } = await request.get(`${URL}/posts`);
        setMessages(messages);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    socket.on("receive_message", addMessage);
    function addMessage(message) {
      setMessages([{ content: message }].concat(messages));
    }
    return function cleanUp() {
      socket.removeListener("receive_message", addMessage);
    };
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%", marginTop: "1.5rem" }}>
        <input
          placeholder="Say something"
          style={{ width: "100%", fontSize: "1.5rem", padding: "1rem" }}
          onChange={event => setChatInput(event.target.value)}
          onKeyPress={onKeyPress}
          value={chatInput}
        />
        <div
          style={{
            marginTop: "1rem",
            minHeight: "5rem",
            fontSize: "1.5rem"
          }}
        >
          {messages.map((message, index) => (
            <div style={{ padding: "1rem" }} key={index}>
              {message.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  async function onKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      await request.post(`${URL}/posts`, {
        text: chatInput,
        userId: userId
      });
      setChatInput("");
      socket.emit("new_chat_message", chatInput);
    }
  }
}
