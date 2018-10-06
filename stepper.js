var five = require('johnny-five');

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
}, 15000);
