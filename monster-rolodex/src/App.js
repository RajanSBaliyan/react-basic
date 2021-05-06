import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {
          name: 'Frankensteins',
          id: 'asc1',
        },
        {
          name: 'Dracula',
          id: 'asc2',
        },
        {
          name: 'Zombie',
          id: 'asc3',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>{this.state.string}</code>
          </p>
          {this.state.monster.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
