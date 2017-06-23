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
      image: quotes[rng].image
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Random Anime Quote Generator</h1>
        <div className="result">
          <div className="result-zone">
            <img
              src={this.state.image}
              className="anime-image"
              alt="anime image"/>
            <div className="quote-zone">
              <p className="quote">"{this.state.quote}"</p>
              <p className="quote-source">- {this.state.character} ({this.state.animeName})</p>
            </div>
          </div>
          <button onClick={() => this.randomizer()}>RANDOM</button>
        </div>

      </div>
    );
  }
}

export default App;
