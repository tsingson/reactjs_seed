var React = require('react/addons');
var $ = require('jquery');

/**
var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];
 */

var Comment = React.createClass({
        getDefaultProps : function() {
            return {
                "who" : "chris",
                "said"  : "pitt"
            };
        },

        getInitialState: function() {
            return {
                author: 'author name',
                text: ' click bollow button to change me'
            };
        },

        render: function() {
            return (
                <div className="comment">
                     <h2 className="commentAuthor">
                    {this.props.author}
                    </h2>
                    {this.props.children}
                </div>
                );
        }
});

var CommentList = React.createClass({
        render: function() {
            var commentNodes = this.props.data.map(function (comment) {  // map the json list to commponent list ??
                return (
                    <Comment author={comment.author}>
                        {comment.text}
                    </Comment>
                    );
                });
            return (
                     <div className="commentList">
                          {commentNodes}
                    </div>
                );
        }
});



var CommentForm = React.createClass({
    handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
        return;
    }
    // TODO: send request to the server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
},
render: function() {
    return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
<input type="text" placeholder="Your name" ref="author" />
<input type="text" placeholder="Say something..." ref="text" />
<input type="submit" value="Post" />
</form>
);
}
});
/**
var CommentBox = React.createClass({
        render: function() {
            return (
                <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.data} />
                <CommentForm />
        </div>
        );
    }
});

 */

var CommentBox = React.createClass({
        loadCommentsFromServer: function() {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                success: function(data) {
                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },
        getInitialState: function() {
            return {data: []};
        },
        componentDidMount: function() {
            this.loadCommentsFromServer();
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        },
        render: function() {
            return (
                <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
        <CommentForm />
        </div>
);
}
});


module.exports = CommentBox;
