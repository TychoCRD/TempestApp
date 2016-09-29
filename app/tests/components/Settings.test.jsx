var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {configure} from 'configureStore';
import ConnectedSettings, {Settings} from 'Settings';

import CountdownSet from 'CountdownSet';
import ConnectedKeywordForm, {KeywordForm} from 'KeywordForm';
import KeywordList from 'KeywordList';


describe('Settings Component', ()=>{
  it('should exist', ()=>{
    expect(Settings).toExist();
  });

  it('should render CountdownSet, KeywordForm, and KeywordList subcomponents', ()=>{
    var store = configure();
    var provider = TestUtils.renderIntoDocument(
  <Provider store={store}>
    <ConnectedSettings/>
  </Provider>
  );
    var settings = TestUtils.scryRenderedComponentsWithType(provider, ConnectedSettings)[0];
    var countdownset = TestUtils.scryRenderedComponentsWithType(settings, CountdownSet);
    var keywordform = TestUtils.scryRenderedComponentsWithType(settings, ConnectedKeywordForm);
    var keywordlist = TestUtils.scryRenderedComponentsWithType(settings, KeywordList);

    expect(countdownset.length).toEqual(1);
    expect(keywordform.length).toEqual(1);
    expect(keywordlist.length).toEqual(1);
  });


  it('should handle delete keyword and dispatch action');



  it('should dispatch 1 action on clicking Start button if no keywords'
  // , ()=>{
  //   var nextStage = 'ideation';
  //   var store = configure({masterKeywords: []});
  //   var action = actions.updateAppStage(nextStage);
  //   var spy = expect.createSpy();
  //   var provider = TestUtils.renderIntoDocument(
  //     <Provider store={store}>
  //     <ConnectedSettings dispatch={spy}/>
  //     </Provider>
  //   );
  //   var settings = TestUtils.scryRenderedComponentsWithType(provider, ConnectedSettings)[0];
  //   var $el = $(ReactDOM.findDOMNode(settings));
  //
  //   TestUtils.Simulate.click($el.find('#start-btn')[0]);
  //
  //
  //
  //   expect(spy).toHaveBeenCalledWith(action);
  //}
);
  //
  it('should dispatch 3 actions on clicking Start button if one or more keywords');



});
