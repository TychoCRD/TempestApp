var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';


var configureStore = require('configureStore');
import Main from 'Main';


describe('Main', ()=>{
  it('should exist', ()=>{
    expect(Main).toExist();
  });

});
