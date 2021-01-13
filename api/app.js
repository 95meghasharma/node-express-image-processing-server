var express = require('express');
const path = require('path');
const app = express();
const pathToIndex = path.resolve('./../client/photos/index.html');
app.use('/*', function (req, res) {
  res.sendFile(pathToIndexgit config --global user.email "youremail@yourdomain.com");
})
module.exports(app);
