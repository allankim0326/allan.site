import React, { useEffect, useState } from 'react';
import request from 'axios';
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
      setMessages([{ content: chatInput }].concat(messages));
    }
  }
}
