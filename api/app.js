var express = require('express');
const path = require('path');
const app = express();
const pathToIndex = path.resolve('D:/amway-renewal/node-express-image-processing-server/client','./index.html');
app.use('/*', (request, response) => {
  response.sendFile(pathToIndex);
});
module.exports=app;
