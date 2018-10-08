import React from 'react';
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="Allans-Header" style={{ textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Hi Im Allan!</h1>
    </header>
  );
}
