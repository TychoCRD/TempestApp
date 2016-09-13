import * as redux from 'redux';
import thunk from 'redux-thunk';

import {appStageReducer, countReducer, countdownStatusReducer, masterKeywordsReducer, ideasReducer} from 'reducers';

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

export var configure = (initialState = {})=>{


  var reducer = redux.combineReducers({
    appStage: appStageReducer,
    count: countReducer,
    masterKeywords: masterKeywordsReducer,
    ideas: ideasReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
