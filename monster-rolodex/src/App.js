import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import CardList from './components/card-list/card-list.components';
import './App.css';
import Heading from './components/heading/heading.components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [{ name: 'Ernestine' }],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    this.setState({
      monster: response.data.map((user) => {
        const monster = {};
        monster.name = user.name;
        return monster;
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <Heading name="The list of Culprits"></Heading>
        <CardList monsters={this.state.monster} />
      </div>
    );
  }
}

export default App;
