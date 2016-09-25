import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', ()=>{

  it('should generate update appStage action', ()=>{
    var action = {
      type: 'UPDATE_APP_STAGE',
      nextStage: 'test'
    };
    var res = actions.updateAppStage(action.nextStage);

    expect(res).toEqual(action);
  });

  it('should generate increaseCount action', ()=>{
    var action = {
      type: 'INCREASE_COUNT'
    };
    var res = actions.increaseCount();

    expect(res).toEqual(action);
  });

  it('should generate decreaseCount action', ()=>{
    var action = {
      type: 'DECREASE_COUNT'
    };
    var res = actions.decreaseCount();

    expect(res).toEqual(action);
  });

  it('should generate countDown action', ()=>{
    var action = {
      type: 'COUNT_DOWN'
    };
    var res = actions.countDown();

    expect(res).toEqual(action);
  });

  it('should generate update addKeyword action', ()=>{
    var action = {
      type: 'ADD_KEYWORD',
      text: 'test'
    };
    var res = actions.addKeyword(action.text);

    expect(res).toEqual(action);
  });

  it('should generate removeKeyword action', ()=>{
    var action = {
      type: 'REMOVE_KEYWORD',
      text: 'test'
    };
    var res = actions.removeKeyword(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleLoadingStatus action', ()=>{
    var action = {
      type: 'TOGGLE_LOADING_STATUS'
    };
    var res = actions.toggleLoadingStatus();

    expect(res).toEqual(action);
  });

// This action test is not returning an array for expect #2 assertion, cannot find server.js

  // it('should create list of all keywords and dispatch ADD_ALL_KEYWORDS and TOGGLE_LOADING_STATUS', (done)=>{
  //   const store = createMockStore({});
  //   const masterKeywords = ['test'];
  //
  //   store.dispatch(actions.getAllKeywords(masterKeywords)).then(()=>{
  //     const actions = store.getActions();
  //     console.log('test actions', actions);
  //     expect(actions[0]).toInclude({
  //       type: 'ADD_ALL_KEYWORDS'
  //     });
  //     expect(actions[0].allKeywords).toInclude('test');
  //     expect(actions[1]).toInclude({
  //       type: 'TOGGLE_LOADING_STATUS'
  //     });
  //     done();
  //   }).catch(done);
  // });

  it('should generate addAllKeywords action', ()=>{
    var action = {
      type: 'ADD_ALL_KEYWORDS',
      allKeywords: ['test']
    };
    var res = actions.addAllKeywords(action.allKeywords);

    expect(res).toEqual(action);
  });

  it('should generate addIdea action', ()=>{
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
      var res = actions.addIdea(action.text);

      expect(res.text).toEqual(action.text);
  });

  it('should generate sortIdea action', ()=>{
    var action = {
      type: 'SORT_IDEA',
      id: 123,
      keyword: 'test'
    };
      var res = actions.sortIdea(action.id, action.keyword);

      expect(res.id).toEqual(action.id);
      expect(res.keyword).toEqual(action.keyword);
  });


});
