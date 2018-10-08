const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { toggleMotor, move } = require('./motorControl');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.post('/toggle', (req, res) => {
  toggleMotor(req.body);
  res.end('Command Recieved');
});

app.post('/move', (req, res) => {
  move(req.body);
  res.end('Command Recieved');
});

app.listen(port);

console.log('lisening on', port);
