var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {configure} from 'configureStore';
import ConnectedIdeation, {Ideation} from 'Ideation';

import WordSpread from 'WordSpread';
import Clock from 'Clock';
import ConnectedIdeaForm from 'IdeaForm';
import IdeasDisplay from 'IdeasDisplay';


describe('Ideation Component', ()=>{
  it('should exist', ()=>{
    expect(Ideation).toExist();
  });

  it('should render WordSpread, Clock, IdeaForm, and IdeasDisplay subcomponents', ()=>{
    var store = configure();
    var provider = TestUtils.renderIntoDocument(
  <Provider store={store}>
    <ConnectedIdeation/>
  </Provider>
  );
    var ideation = TestUtils.scryRenderedComponentsWithType(provider, ConnectedIdeation)[0];
    var wordspread = TestUtils.scryRenderedComponentsWithType(ideation, WordSpread);
    var clock = TestUtils.scryRenderedComponentsWithType(ideation, Clock);
    var ideaform = TestUtils.scryRenderedComponentsWithType(ideation, ConnectedIdeaForm);
    var ideadisplay = TestUtils.scryRenderedComponentsWithType(ideation, IdeasDisplay);

    expect(wordspread.length).toEqual(1);
    expect(clock.length).toEqual(1);
    expect(ideaform.length).toEqual(1);
    expect(ideadisplay.length).toEqual(1);
  });


});
