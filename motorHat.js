var five = require('johnny-five');
var Raspi = require('raspi-io');

const configs = require('./config');
var board = new five.Board({
  repl: false,
  io: new Raspi()
});

const motors = {
  m1: five.Motor(configs.m1),
  m2: five.Motor(configs.m2),
  m3: five.Motor(configs.m3),
  m4: five.Motor(configs.m4)
};

board.on('ready', function() {
  console.log('board ready');
  this.i2cConfig();
});

module.exports = motors;
