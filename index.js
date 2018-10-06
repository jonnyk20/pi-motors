const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const motorControl = require('./motorControl');

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
  motorControl(req.body);
  res.end('Command Recieved');
});

app.listen(port);

console.log('lisening on', port);
