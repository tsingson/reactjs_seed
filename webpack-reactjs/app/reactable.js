/** @jsx React.DOM **/

var React = require('react');
var Reflux = require('reflux');
var Reactable = require('reactable');


var Table = Reactable.Table;
React.renderComponent(
<Table className="table" data={[
    { Name: 'Griffin Smith', Age: 18 },
    { Age: 23,  Name: 'Lee Salminen' },
    { Age: 28, Position: 'Developer' },
    ]} />,
document.getElementById('app')
);