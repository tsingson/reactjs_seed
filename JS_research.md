# some best JS framework or opensource project that we should learn


https://github.com/ianobermiller/nuclearmail 






## reactJS
 * best of best 
 http://facebook.github.io/fixed-data-table/
 
 
https://github.com/rackt/react-router    路由
https://github.com/rackt/react-autocomplete

https://github.com/rackt/react-modal

## UI layout
https://github.com/react-bootstrap/react-bootstrap
https://github.com/mtscout6/react-router-bootstrap

## 数据可视化 及 reactJS 集成
https://github.com/mbostock/d3

[reactJS / D3 集成](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/) 

[以数据描述界面状态](http://nicolashery.com/describing-ui-state-with-data/)

[JS前后台统一开发](http://nicolashery.com/exploring-isomorphic-javascript/)
[reflux 介绍文章](http://blog.krawaller.se/posts/reflux-refinement/)
[reflux 实例todo讲解](http://blog.krawaller.se/posts/a-reflux-todomvc-codebase-walkthrough/)
[reflux 数据流模型](http://blog.krawaller.se/posts/the-reflux-data-flow-model/)

[ webpack 打包 ](http://www.uxebu.com/blog/2014/09/getting-started-webpack/)

## reactJS 技巧与经验

http://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/#disqus_thread

[reactJS 的 context 上下文 ](https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html)
[reactJS 最佳实践之一](http://aeflash.com/2015-02/react-tips-and-best-practices.html)

http://blog.krawaller.se/posts/a-react-encapsulation-pattern/

## 界面风格

http://abpetkov.github.io/switchery/


## 一些参考例子
* good example

http://xeodou.github.io/react-crouton/

https://github.com/ryanflorence/react-magic-move
https://github.com/NextThought/react-editor-component  

## rich text editor 

https://github.com/neilj/Squire
https://github.com/jbt/markdown-editor

need trace
https://github.com/rsamec/react-designer

## object-c 

https://github.com/omnigroup
https://github.com/robbiehanson/CocoaHTTPServer


package.json
``` {
  "name": "mocha-with-traceur",
  "version": "0.0.1",
  "description": "A simple example project using mocha, sinon and ES6 (by using traceur).",
  "scripts": {
    "test": "mocha --compilers js:mocha-traceur src/*.js",
    "start": "webpack-dev-server"
  },
  "author": "uxebu",
  "license": "MIT",
  "devDependencies": {
    "jquery": "^2.1.1",
    "mocha": "^2.0.1",
    "sinon": "^1.12.1",
    "webpack-dev-server": "^1.6.5",
    "webpack-traceur-loader": "^0.3.0",
    "mocha-traceur": "^2.1.0"
  }
}
```

webpack.config.js
``` module.exports = {
  entry: './src/main',
  module: {
    loaders: [
      // Transpile any JavaScript file:
      {
        test: /\.js$/,
        loader: 'webpack-traceur?runtime',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json']
  },
  debug: true // shows also which files run through traceur, good to learn and validate the `exclude`
};
```
