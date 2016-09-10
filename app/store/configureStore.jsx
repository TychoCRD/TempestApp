import * as redux from 'redux';
import thunk from 'redux-thunk';

var initialState = {
  appStage: 'settings',
  count: 300,
  countdownStatus: 'stopped',
  masterKeywords: [],
  allKeywords: [],
  wordCloudUrl: undefined,
  ideas: []
};

export var configure = (initialState = initialState)=>{

  var reducer = (whatevs)=>{
    return {
      appStage: 'display',
      count: 300,
      countdownStatus: 'stopped',
      masterKeywords: [],
      allKeywords: [],
      wordCloudUrl: undefined,
      ideas: []
    };
  };

  //redux.combineReducers({});

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
