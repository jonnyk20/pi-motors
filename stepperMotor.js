const five = require('johnny-five');

class Stepper {
  constructor(pinNumbers) {
    this.pins = {};
    pinNumbers.forEach((num, i) => (this.pins[`p${i}`] = new five.Pin(num)));
    this.halfStepSeq = [
      [1, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [1, 0, 0, 1]
    ];
    this.halfStep = 0;
  }

  rotate() {
    if (this.halfStep === 7) {
      this.halfStep = 0;
    } else {
      this.halfStep++;
    }
    for (let pinNumber = 0; pinNumber < 4; pinNumber++) {
      console.log('halfStep', this.halfStep);
      console.log('pinNumber', pinNumber);
      this.pins[`p${pinNumber}`].write(
        this.halfStepSeq[this.halfStep][pinNumber]
      );
    }
  }

  start(miliseconds = 5000) {
    this.rotation = setInterval(this.rotate.bind(this), 1);

    setTimeout(() => {
      this.stop();
    }, miliseconds);
  }
  stop() {
    clearInterval(this.rotation);
  }
}

module.exports = Stepper;
