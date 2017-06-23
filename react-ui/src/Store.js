import { createStore } from 'redux';
import quotes from './Quotes.js';

const actions = {
  RANDOMIZER: 'RANDOMIZER',
}

var initialState = {
  text: "Click the button for a random anime quote",
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.RANDOMIZER:
      return {  animeName: action.animeName,
                character: action.character,
                quote: action.quote,
                image: action.image
              }
    default: return state
  }
}

const store = createStore(reducer);

export default store;
