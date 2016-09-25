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

    it('should decrease count', ()=>{
      var action = {
        type: 'DECREASE_COUNT'
      };
      var res = reducers.countReducer(df(100), df(action));

      expect(res).toEqual(70);
    });

    it('should count down', ()=>{
      var action = {
        type: 'COUNT_DOWN'
      };
      var res = reducers.countReducer(df(100), df(action));

      expect(res).toEqual(99);
    });

  });

  describe('isLoadingReducer', ()=>{
    it('should toggle loading status', ()=>{
      var action = {
        type: 'TOGGLE_LOADING_STATUS'
      };
      var res = reducers.isLoadingReducer(df(false), df(action));

      expect(res).toEqual(true);
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

  describe('allKeywordsReducer', ()=>{
    it('should add all keywords', ()=>{
      var action = {
        type: 'ADD_ALL_KEYWORDS',
        allKeywords: ['test']
      };
      var res = reducers.allKeywordsReducer(df([]), df(action));

      expect(res).toEqual(action.allKeywords);
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

    it('should sort idea', ()=>{
      var ideas = [{
        id: 123,
        text: 'test this out',
        boxClass: 'bg-1',
        sorted: false,
        sort: undefined
      }];
      var action = {
        type: 'SORT_IDEA',
        id: 123,
        keyword: 'test'
      };
      var res = reducers.ideasReducer(df(ideas), df(action));

      expect(res[0].sorted).toEqual(true);
      expect(res[0].sort).toEqual(action.keyword);
    });

  });

}); // End of Reducers describe
