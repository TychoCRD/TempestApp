var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Settings from 'Settings';


describe('Settings', ()=>{
  it('should exist', ()=>{
    expect(Settings).toExist();
  });

});
