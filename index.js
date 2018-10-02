const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const toggleMotor = require('./toggleMotor');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.post('*', (req, res) => {
  const {
    body: { motorId }
  } = req;
  if (motorId) {
    toggleMotor(motorId);
  }
  res.end('we made it');
});

app.listen(port);

console.log('lisening on', port);
