import React, { Component } from 'react';
import request from 'axios';
import { URL } from '../constants';

export default class Chat extends Component {
  mounted = false;

  state = {
    messages: [],
    chatInput: ''
  };

  async componentDidMount() {
    this.mounted = true;
    try {
      const { data: messages } = await request.get(`${URL}/posts`);
      if (this.mounted) this.setState({ messages: messages });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { messages, chatInput } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <input
            placeholder="Say something"
            style={{ width: '100%', fontSize: '1.5rem' }}
            onChange={event => this.setState({ chatInput: event.target.value })}
            onKeyPress={this.onKeyPress}
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
  }
  onKeyPress = async event => {
    const { chatInput } = this.state;
    if (event.key === 'Enter') {
      event.preventDefault();
      await request.post(`${URL}/posts`, {
        text: chatInput
      });
      this.setState(state => ({
        chatInput: '',
        messages: state.messages.concat([{ content: chatInput }])
      }));
    }
  };
}
