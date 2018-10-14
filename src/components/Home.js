import React, { Component } from 'react';
import gundam from '../gundam.png';
import smartRobots from '../smart-robots.jpg';
import robot from '../robot.png';
import Buttons from './Buttons';

export default class Home extends Component {
  state = {
    things: ['Ouch'],
    randomNumber: 0,
    randomWords: 'Something'
  };

  render() {
    const { randomNumber, things } = this.state;
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <span>{`ClassName="Smart Robots"`}</span>
          <div>Welcome to my website!</div>
          <Buttons
            punchMe={this.onOuch}
            punchMeToo={this.onAddRandomOuch}
            cureYou={this.onRefresh}
            touchMe={this.onAddRandomNumbers}
            touchMeToo={this.onAddRandomWords}
          />
          {things.map((thing, index) => (
            <div key={index}>{things}</div>
          ))}
          <div>{randomNumber}</div>
          <div>
            {randomNumber} is{' '}
            {`${
              randomNumber > 50 ? 'larger than fifty' : 'not larger than fifty'
            }`}
          </div>
          <div />
        </div>
        <div>
          <img style={{ width: '300px' }} src={gundam} alt="" />
        </div>
        <div>
          <img style={{ width: '300px' }} src={smartRobots} alt="" />
        </div>
        <div>
          <img style={{ width: '300px' }} src={robot} alt="" />
        </div>
      </div>
    );
  }

  onOuch = () => {
    window.alert('Ouch!!');
  };
  onRefresh = () => {
    window.location.reload();
  };

  onAddRandomOuch = () => {
    this.setState(state => ({
      things: state.things.concat(['Ouch!!'.repeat(Math.random() * 10)])
    }));
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
