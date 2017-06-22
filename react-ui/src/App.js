import React, { Component } from 'react';
import quotes from './Quotes.js';
import store from './Store.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  randomizer() {
    var rng = Math.floor(Math.random() * 25);
    store.dispatch({
      type: 'RANDOMIZER',
      animeName: quotes[rng].animeName,
      character: quotes[rng].character,
      quote: quotes[rng].quote,
      gif: quotes[rng].gif
    })
  }

  render() {

    return (
      <div className="App">
        <img src={this.state.gif} alt="anime gif"/>
        <pre>{this.state.quote}</pre>
        <p>- {this.state.character}</p>
        <button onClick={() => this.randomizer()}>RANDOM</button>
      </div>
    );
  }
}

export default App;
