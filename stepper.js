var five = require('johnny-five');
var Raspi = require('raspi-io');

const configs = require('./config');
var board = new five.Board({
  repl: false,
  io: new Raspi()
});

board.on('ready', function() {
  console.log('board readyyyy');
  this.i2cConfig();
  // const pinNumbers = [7, 11, 13, 15];
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
    // if (i === 511) {
    //   return;
    // }
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
  }, 15000);

  // for (let i = 0; i < 512; i++) {
  //   for (let halfstep = 0; halfstep < 8; halfstep++) {
  //     for (let pinNumber = 0; pinNumber < 4; pinNumber++) {
  //       pins[`p${pinNumber}`].write(halfstepSeq[halfstep][pinNumber]);
  //     }
  //   }
  // }
});

/*
  import RPi.GPIO as GPIO
  import time
  GPIO.setmode(GPIO.BOARD)
  control_pins = [7,11,13,15]
  for pin in control_pins:
    GPIO.setup(pin, GPIO.OUT)
    GPIO.output(pin, 0)
  halfstep_seq = [
    [1,0,0,0],
    [1,1,0,0],
    [0,1,0,0],
    [0,1,1,0],
    [0,0,1,0],
    [0,0,1,1],
    [0,0,0,1],
    [1,0,0,1]
  ]
  for i in range(512):
    for halfstep in range(8):
      for pin in range(4):
        GPIO.output(control_pins[pin], halfstep_seq[halfstep][pin])
      time.sleep(0.001)
  GPIO.cleanup()
*/
