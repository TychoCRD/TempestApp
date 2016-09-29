var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {configure} from 'configureStore';
import ConnectedDisplay, {Display} from 'Display';

import SortSpread from 'SortSpread';
import ExportControls from 'ExportControls';

var Clipboard = function(){
  this.test = 'test';
  return this;
};

describe('Display Component', ()=>{
  it('should exist', ()=>{
    expect(Display).toExist();
  });

  it('should render SortSpread, ExportControls subcomponents'
  // , ()=>{
  //   var store = configure();
  //   var provider = TestUtils.renderIntoDocument(
  // <Provider store={store}>
  //   <ConnectedDisplay/>
  // </Provider>
  // );
  //   var display = TestUtils.scryRenderedComponentsWithType(provider, ConnectedDisplay)[0];
  //   var sortspread = TestUtils.scryRenderedComponentsWithType(display, SortSpread);
  //   var exportcontrols = TestUtils.scryRenderedComponentsWithType(display, ExportControls);
  //
  //
  //   expect(sortspread.length).toEqual(1);
  //   expect(exportcontrols.length).toEqual(1);
  // }
);

});
