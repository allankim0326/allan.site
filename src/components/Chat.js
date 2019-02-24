import React, { useEffect, useState } from 'react';
import request from 'axios';
import { socket } from '../helpers/requestHelpers';
import { URL } from '../constants';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

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
    socket.on('receive_message', addMessage);
    function addMessage(message) {
      setMessages([{ content: message }].concat(messages));
    }
    return function cleanUp() {
      socket.removeListener('receive_message', addMessage);
    };
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%' }}>
        <input
          placeholder="Say something"
          style={{ width: '100%', fontSize: '1.5rem' }}
          onChange={event => setChatInput(event.target.value)}
          onKeyPress={onKeyPress}
          value={chatInput}
        />
        <div style={{ minHeight: '5rem' }}>
          {messages.map((message, index) => (
            <div key={index}>{message.content}</div>
          ))}
        </div>
      </div>
    </div>
  );

  async function onKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      await request.post(`${URL}/posts`, {
        text: chatInput
      });
      setChatInput('');
      socket.emit('new_chat_message', chatInput);
    }
  }
}
