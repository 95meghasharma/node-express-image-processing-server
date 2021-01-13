var express = require('express');
const path = require('path');
const app = express();
var pathToIndex = path.resolve('D:/amway-renewal/node-express-image-processing-server/client','./index.html');
app.use('/*', function (req, res) {
  res.sendFile(pathToIndex);
})
module.exports=app;
