import React, { Component } from 'react';

export default class Chat extends Component {
  state = {
    messages: [],
    chatInput: ''
  };
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
              <div key={index}>{message}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  onKeyPress = event => {
    const { chatInput } = this.state;
    if (event.key === 'Enter') {
      this.setState(state => ({
        chatInput: '',
        messages: state.messages.concat([chatInput])
      }));
    }
  };
}
