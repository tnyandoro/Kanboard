const express = require('express');
const { web } = require('webpack');
const webpack = require('webpack');
const webpackDeveMiddleware =require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const complier = webpack(config);

// Tell express to use webpack-dev-middleware and use the web.config.js 
// configuration file as a base.
app.use(
  webpackDeveMiddleware(complier, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000
app.listen(3000, function () {
  console.log('Exp')
})