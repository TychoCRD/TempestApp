import * as redux from 'redux';
import thunk from 'redux-thunk';

import {appStageReducer, countReducer, countdownStatusReducer, masterKeywordsReducer} from 'reducers';


export var configure = (initialState = {})=>{
  //
  // initial  = {
  //     appStage: 'display',
  //     count: 300,
  //     countdownStatus: 'stopped',
  //     masterKeywords: [],
  //     allKeywords: [],
  //     wordCloudUrl: undefined,
  //     ideas: []
  //   };


  var reducer = redux.combineReducers({
    appStage: appStageReducer,
    count: countReducer,
    countdownStatus: countdownStatusReducer,
    masterKeywords: masterKeywordsReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
