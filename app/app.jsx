var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//import actions from 'actions';
var store = require('configureStore').configure();
import Main from 'Main';



// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Main/>
	</Provider>,
	document.getElementById('app')
	);
