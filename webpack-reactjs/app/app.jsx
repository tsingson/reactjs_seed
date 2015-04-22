'use strict';

import './index.html';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react/addons';
import Modal from 'react-modal';

/*
 // timer app

 var App = React.createClass({
 getInitialState: function() {
 return {secondsElapsed: 0};
 },
 tick: function() {
 this.setState({secondsElapsed: this.state.secondsElapsed + 1});
 },
 componentDidMount: function() {
 this.interval = setInterval(this.tick, 1000);
 },
 componentWillUnmount: function() {
 clearInterval(this.interval);
 },
 render: function() {
 return (
 <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
 );
 }
 });


 var appElement = document.getElementById('app');
 React.render(<App />, appElement);

 */

class HelloMessage extends React.Component {
    render() {
        return
    <div > Hello { this.props.name } </div>
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount, name: props.name};
    }

    tick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
                <div>

            <HelloMessage name= {this.state.name} />
            <div onClick = {this.tick.bind(this)} >
                Clicks:{this.state.count}
            </div>
            </div>
        );
    }
}
Counter.propTypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};

class TestComponent extends React.Component {
    render() {
        return (
            <div>
                <HelloMessage name='tsingson' />
                <Counter />
            </div>
        )
    }
}

var App = Counter;

var appElement = document.getElementById('app');

React.render( < App   name="tsingson" />, appElement);

