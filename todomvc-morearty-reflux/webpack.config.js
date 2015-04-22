var webpack = require('webpack');

module.exports = {

    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/bootstrap',
        './src/js/app'
    ],
    output: {
        path: __dirname,
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx'] },
          //  { test: /\.(png|jpg)$/, loader: "url?limit=1000"},
            { test: /\.html$/, loader: "html"}
        ]
    },


    /*
    entry: [
        './src/js/app'
    ],
    output: {
        path: __dirname,
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    plugins: [
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx'] }
        ]
    }
    */

};
