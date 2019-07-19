import React from 'react';
import Robot from './giphy.gif';

export default function Gifs() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <img src={Robot} />
      Gifs
    </div>
  );
}
