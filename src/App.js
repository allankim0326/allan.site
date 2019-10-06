import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Chat from './components/Chat';
import Videos from './components/Videos';
import Gifs from './components/Gifs';
import './App.css';
import { Route } from 'react-router-dom';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div>
          <Modal />
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Videos} />
          <Route path="/chat" component={Chat} />
          <Route path="/gifs" component={Gifs} />
        </div>
      </div>
    );
  }
}

export default App;
