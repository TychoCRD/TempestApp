import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('Reducers', ()=>{

  describe('appStageReducer', ()=>{
    it('should update app stage', ()=>{
      var action = {
        type: 'UPDATE_APP_STAGE',
        nextStage: 'test'
      };
      var res = reducers.appStageReducer(df('settings'), df(action));

      expect(res).toEqual(action.nextStage);
    });

  });

  describe('countReducer', ()=>{
    it('should increase count', ()=>{
      var action = {
        type: 'INCREASE_COUNT'
      };
      var res = reducers.countReducer(df(100), df(action));

      expect(res).toEqual(130);
    });

    it('should ecrease count', ()=>{
      var action = {
        type: 'DECREASE_COUNT'
      };
      var res = reducers.countReducer(df(100), df(action));

      expect(res).toEqual(70);
    });

  });

  describe('countdownStatusReducer', ()=>{
    it('should start countdownStatus', ()=>{
      var action = {
        type: 'START_COUNTDOWN'
      };
      var res = reducers.countdownStatusReducer(df('stopped'), df(action));

      expect(res).toEqual('started');
    });

    it('should stop countdownStatus', ()=>{
      var action = {
        type: 'STOP_COUNTDOWN'
      };
      var res = reducers.countdownStatusReducer(df('started'), df(action));

      expect(res).toEqual('stopped');
    });

  });

  describe('masterKeywordsReducer', ()=>{
    it('should add new keyword', ()=>{
      var action = {
        type: 'ADD_KEYWORD',
        text: 'test'
      };
      var res = reducers.masterKeywordsReducer(df([]), df(action));

      expect(res[0]).toEqual('test');
    });

    it('should remove keyword', ()=>{
      var action = {
        type: 'REMOVE_KEYWORD',
        text: 'test'
      };
      var res = reducers.masterKeywordsReducer(df(['test']), df(action));

      expect(res).toEqual([]);
    });
  });

  describe('ideasReducer', ()=>{
    it('should add idea', ()=>{
      var action = {
        type: 'ADD_IDEA',
        idea: {
          id: 1234,
          text: 'test',
          boxClass: 'idea-box bg-1',
          sorted: false,
          sort: undefined,
          sortBoxClass: undefined
        }
      };
      var res = reducers.ideasReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.idea);
    });

  });

}); // End of Reducers describe
