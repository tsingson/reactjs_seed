var React = require('react/addons');
var Showdown = require('showdown');

var converter = new Showdown.converter();

var MarkdownEditor = React.createClass({
    getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
},
handleChange: function() {
    this.setState({value: React.findDOMNode(this.refs.textarea).value});
},
render: function() {
    return (
        <div className="MarkdownEditor">
            <h3>Input</h3>
                <textarea
                    onChange={this.handleChange}
                    ref="textarea"
                    defaultValue={this.state.value} />
            <h3>Output</h3>
            <div
                className="content"
                dangerouslySetInnerHTML={{
                __html: converter.makeHtml(this.state.value)
                }}
            />
        </div>
        );
    }
});

var appElement = document.getElementById('app');
React.render(<MarkdownEditor />, appElement);