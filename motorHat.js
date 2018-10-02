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

  const pinNumbers = [7, 0, 2, 3];
  const pins = {};
  pinNumbers.forEach((num, i) => (pins[`p${i}`] = new five.Pin(num)));
  halfstepSeq = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 1]
  ];

  let i = 0;
  let halfstep = 0;

  setPins = () => {
    i++;
    if (halfstep === 7) {
      halfstep = 0;
    } else {
      halfstep++;
    }
    for (let pinNumber = 0; pinNumber < 4; pinNumber++) {
      console.log('i', i);
      console.log('halfstep', halfstep);
      console.log('pinNumber', pinNumber);
      pins[`p${pinNumber}`].write(halfstepSeq[halfstep][pinNumber]);
    }
  };

  const loop = setInterval(setPins, 1);
  setTimeout(() => {
    clearInterval(loop);
  }, 20000);
});

module.exports = motors;
