var React = require('react/addons');

var TodoApp = require('./components/component_todo.js');


var appElement = document.getElementById('app');
React.render(<TodoApp />, appElement);

