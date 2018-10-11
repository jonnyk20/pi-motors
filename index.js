var five = require('johnny-five');
var Raspi = require('raspi-io');
const server = require('./server');
const { toggleMotor, move } = require('./motorControl');

const dcMotorConfigs = require('./config');

var board = new five.Board({
  repl: false,
  io: new Raspi()
});

board.on('ready', function() {
  console.log('board ready');
  // const Stepper = require('./stepper');
  const motors = {
    dc1: five.Motor(dcMotorConfigs.m1),
    dc2: five.Motor(dcMotorConfigs.m2),
    dc3: five.Motor(dcMotorConfigs.m3),
    dc4: five.Motor(dcMotorConfigs.m4)
    // s1: new Stepper([7, 0, 2, 3])
  };
  server.post('/toggle', (req, res) => {
    toggleMotor(motors, req.body, motors);
    res.end('Command Recieved');
  });

  server.post('/move', (req, res) => {
    move(motors, req.body);
    res.end('Command Recieved');
  });
});

module.exports = motors;
