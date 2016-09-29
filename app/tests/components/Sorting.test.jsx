var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {configure} from 'configureStore';
import ConnectedSorting, {Sorting} from 'Sorting';

import IdeasDisplay from 'IdeasDisplay';
import IdeaShowcase from 'IdeaShowcase';
import IdeaSorter from 'IdeaSorter';
import SortSpread from 'SortSpread';

describe('Sorting Component', ()=>{
  it('should exist', ()=>{
    expect(Sorting).toExist();
  });

  it('should render IdeasDisplay, IdeaShowcase, IdeaSorter, SortSpread subcomponents', ()=>{
    var store = configure();
    var provider = TestUtils.renderIntoDocument(
  <Provider store={store}>
    <ConnectedSorting/>
  </Provider>
  );
    var sorting = TestUtils.scryRenderedComponentsWithType(provider, ConnectedSorting)[0];
    var ideadisplay = TestUtils.scryRenderedComponentsWithType(sorting, IdeasDisplay);
    var ideashowcase = TestUtils.scryRenderedComponentsWithType(sorting, IdeaShowcase);
    var ideasorter = TestUtils.scryRenderedComponentsWithType(sorting, IdeaSorter);
    var sortspread = TestUtils.scryRenderedComponentsWithType(sorting, SortSpread);


    expect(ideadisplay.length).toEqual(1);
    expect(ideashowcase.length).toEqual(1);
    expect(ideasorter.length).toEqual(1);
    expect(sortspread.length).toEqual(1);
  });


});
