var five = require('johnny-five');
var Raspi = require('raspi-io');

var configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
var board = new five.Board({
  repl: false,
  io: new Raspi()
});

board.on('ready', function() {
  console.log('board ready');
  this.i2cConfig();
  var motor = new five.Motor(configs.M3);
  motor.start();
  setTimeout(() => {
    motor.stop();
  }, 5000);
});
