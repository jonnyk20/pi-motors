var five = require('johnny-five');
var Raspi = require('raspi-io');

const dcMotorConfigs = require('./config');
// const Stepper = require('./stepper');

var board = new five.Board({
  repl: false,
  io: new Raspi()
});
const motors = {
  dc1: five.Motor(dcMotorConfigs.m1),
  dc2: five.Motor(dcMotorConfigs.m2),
  dc3: five.Motor(dcMotorConfigs.m3),
  dc4: five.Motor(dcMotorConfigs.m4)
  // s1: new Stepper([7, 0, 2, 3])
};

board.on('ready', function() {
  console.log('board ready');
  // this.i2cConfig();
});

module.exports = motors;
