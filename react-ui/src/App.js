import React, { Component } from 'react';
import quotes from './Quotes.js';
import store from './Store.js';
import welcome from './images/welcome.gif';
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
      image: quotes[rng].image,
      welcome: "welcome-invisible",
      result: "result-visible"
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Random Anime Quote Generator</h1>
        <div className="result">
          <div className={this.state.welcome}>
            <p className="welcome">WELCOME</p>
            <img className="anime-image" src={welcome} />
            <p className="welcome-message">Click the random button</p>
          </div>
          <div className={this.state.result}>
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
        <footer>
          Information from <a href="https://myanimelist.net/featured/1497/Top_25_Best_Anime_Quotes_of_All_Time" target="_blank">MyAnimeList</a>
        </footer>
      </div>
    );
  }
}

export default App;
