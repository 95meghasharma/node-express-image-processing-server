var express = require('express');
const path = require('path');
const app = express();
const pathToIndex = path.resolve('./../client/photos/index.html');
app.use('/*', function (req, res) {
  res.sendFile(pathToIndex);
})
module.exports(app);
