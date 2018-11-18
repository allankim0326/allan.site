import React, { Component } from 'react';
import image1 from '../../src/img/welcome.jpg';
import smartRobots from '../smart-robots.jpg';
import robot from '../robot.png';
import Buttons from './Buttons';

export default class Home extends Component {
  state = {
    chatInput: '',
    messages: [],
    things: ['Ouch'],
    randomNumber: 0,
    randomWords: 'Something'
  };

  render() {
    const {
      chatInput,
      messages,
      randomNumber,
      randomWords,
      things
    } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>
              <img src={image1} style={{ width: '300px' }} />
            </div>
            <div>
              <img style={{ width: '300px' }} src={smartRobots} alt="" />
            </div>
            <div>
              <img style={{ width: '300px' }} src={robot} alt="" />
            </div>
          </div>
          <div
            style={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Buttons
              punchMe={this.onOuch}
              punchMeToo={this.onAddRandomOuch}
              cureYou={this.onRefresh}
              touchMe={this.onAddRandomNumbers}
              touchMeToo={this.onAddRandomWords}
            />
            <span>{`Welcome to my website`}</span>
            <div>Crazy buttons!</div>
            <div>{randomWords}</div>
            {things.map((thing, index) => (
              <div key={index}>{things}</div>
            ))}
            <div>{randomNumber}</div>
            <div>
              {randomNumber} is{' '}
              {`${
                randomNumber > 50
                  ? 'larger than fifty'
                  : 'not larger than fifty'
              }`}
            </div>
          </div>
          <div style={{ width: '30%' }}>
            <input
              placeholder="Say something"
              style={{ width: '100%', fontSize: '1.5rem' }}
              onChange={event =>
                this.setState({ chatInput: event.target.value })
              }
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

  onOuch = () => {
    window.alert('Ouch!!');
  };
  onRefresh = () => {
    this.setState(state => ({ things: ['cured'] }));
  };

  onAddRandomOuch = () => {
    const thisWasCured = this.state.things[0] === 'cured';
    if (thisWasCured) {
      this.setState(state => {
        const stateWithJustOneOuch = { things: ['Ouch!'] };
        return stateWithJustOneOuch;
      });
    } else {
      this.setState(state => ({
        things: state.things.concat(['Ouch!!'.repeat(Math.random() * 10)])
      }));
    }
  };

  onAddRandomNumbers = () => {
    this.setState({ randomNumber: Math.floor(Math.random() * 100) });
  };

  onAddRandomWords = () => {
    console.log('test');
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
    let randomWords = '';
    let wordLength = Math.floor(Math.random() * 10);
    for (let i = 0; i < wordLength; i++) {
      randomWords +=
        alphabet[Math.floor(Math.random() * (alphabet.length - 1))];
    }
    this.setState({ randomWords: randomWords });
  };
}
