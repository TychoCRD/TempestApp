import expect from 'expect';

import * as actions from 'actions';

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

  // it('should generate startCountdown action', ()=>{
  //   var action = {
  //     type: 'START_COUNTDOWN'
  //   };
  //   var res = actions.startCountdown();
  //
  //   expect(res).toEqual(action);
  // });
  //
  // it('should generate stopCountdown action', ()=>{
  //   var action = {
  //     type: 'STOP_COUNTDOWN'
  //   };
  //   var res = actions.stopCountdown();
  //
  //   expect(res).toEqual(action);
  // });

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
