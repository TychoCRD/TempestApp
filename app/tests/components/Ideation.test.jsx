var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Ideation from 'Ideation';


describe('Ideation', ()=>{
  it('should exist', ()=>{
    expect(Ideation).toExist();
  });

});
