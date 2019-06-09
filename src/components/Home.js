import React, { useState } from 'react';
import image1 from '../../src/img/welcome.jpg';
import smartRobots from '../smart-robots.jpg';
import robot from '../robot.png';
import ActionButtons from './ActionButtons';
import Firework from './Firework';

export default function Home() {
  const [things, setThings] = useState(['Ouch']);
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomWords, setRandomWords] = useState('Something');
  const [firework, setFirework] = useState(false);

  return (
    <div>
      {firework && <Firework />}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div>
            <img alt="" src={image1} style={{ width: '300px' }} />
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
            marginTop: '1rem',
            fontSize: '1.5rem',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <ActionButtons
            punchMe={handleOuch}
            punchMeToo={handleAddRandomOuch}
            cureYou={handleRefresh}
            touchMe={handleAddRandomNumbers}
            touchMeToo={handleAddRandomWords}
            firework={() => setFirework(firework => !firework)}
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
              randomNumber > 50 ? 'larger than fifty' : 'not larger than fifty'
            }`}
          </div>
        </div>
      </div>
    </div>
  );

  function handleOuch() {
    window.alert('Ouch!!');
  }

  function handleRefresh() {
    setThings(['cured']);
  }

  function handleAddRandomOuch() {
    const thisWasCured = things[0] === 'cured';
    if (thisWasCured) {
      return setThings(['Ouch!']);
    }
    return setThings(things =>
      things.concat(['Aha!!'.repeat(Math.random() * 10)])
    );
  }

  function handleAddRandomNumbers() {
    setRandomNumber(Math.floor(Math.random() * 100));
  }

  function handleAddRandomWords() {
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
    setRandomWords(randomWords);
  }
}
