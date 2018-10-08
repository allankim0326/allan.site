import React, { Component } from 'react';
import gundam from '../gundam.png';
import smartRobots from '../smart-robots.jpg';
import robot from '../robot.png';

export default class Home extends Component {
  state = {
    things: ['Ouch'],
    randomNumber: 0,
    randomWords: 'Something'
  };

  render() {
    const { randomNumber, randomWords, things } = this.state;
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <span>{`ClassName="Smart Robots"`}</span>
          <div>Welcome to my website!</div>
          <button onClick={this.onOuch}>punch me!</button>
          <button onClick={this.onAddRandomOuch}>punch me!</button>
          <button onClick={this.onAddRandomNumbers}>touch me!</button>
          <button onClick={this.onAddRandomWords}>touch me too!</button>
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
          <div>{randomWords}</div>
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

  onAddRandomOuch = () => {
    this.setState(state => ({
      things: state.things.concat(['Ouch!!'.repeat(Math.random() * 10)])
    }));
  };

  onAddRandomNumbers = () => {
    this.setState({ randomNumber: Math.floor(Math.random() * 100) });
  };

  onAddRandomWords = () => {
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
