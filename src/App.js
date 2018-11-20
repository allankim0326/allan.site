import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Chat from './components/Chat';
import Videos from './components/Videos';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Videos} />
          <Route path="/chat" component={Chat} />
        </div>
      </div>
    );
  }
}

export default App;
