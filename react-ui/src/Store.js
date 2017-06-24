import { createStore } from 'redux';

const actions = {
  RANDOMIZER: 'RANDOMIZER',
}

var initialState = {
  text: "Click the button for a random anime quote",
  welcome: "welcome-visible",
  result: "result-invisible"
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.RANDOMIZER:
      return {  animeName: action.animeName,
                character: action.character,
                quote: action.quote,
                image: action.image,
                welcome: action.welcome,
                result: action.result
              }
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {
  actions, store
};
