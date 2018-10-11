const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port);

module.exports = app;

console.log('lisening on', port);
