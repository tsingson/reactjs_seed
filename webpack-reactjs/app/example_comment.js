var React = require('react/addons');

var data = [
    {author: "killbill", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"},
    {author: "tsigson@me.com", text: "tsingson's comments" }
];

var CommentBox = require('./components/component_commentbox.js');

var appElement = document.getElementById('app');

//React.render(<CommentBox data={data} />, appElement);
React.render(<CommentBox url="http://localhost:8090/comments" />, appElement);

