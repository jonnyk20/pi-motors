it coclass Motor {
  constructor(id) {
    this.id = id;
    this.forward = command(this.id, 'forward');
    this.reverse = command(this.id, 'reverse');
    this.stop = command(this.id, 'stop');
  }
}

class Stepper {
  constructor(pinNumbers) {
    this.pins = {};
    pinNumbers.forEach(
      (num, i) =>
        (this.pins[`p${i}`] = {
          write: () => {}
        })
    );
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
    this.stepInterVal = 1;
  }

  rotate() {
    if (this.halfStep === 7) {
      this.halfStep = 0;
    } else {
      this.halfStep++;
    }
    for (let pinNumber = 0; pinNumber < 4; pinNumber++) {
      this.pins[`p${pinNumber}`].write(
        this.halfStepSeq[this.halfStep][pinNumber]
      );
    }
    console.log(this.halfStepSeq[this.halfStep]);
  }

  start(miliseconds = 5000) {
    this.rotation = setInterval(this.rotate.bind(this), this.stepInterVal);

    setTimeout(() => {
      this.stop();
    }, miliseconds);
  }
  stop() {
    clearInterval(this.rotation);
  }
}

const motors = {
  dc1: new Motor('m1'),
  dc2: new Motor('m2'),
  dc3: new Motor('m3'),
  dc4: new Motor('m4'),
  s1: new Stepper([7, 0, 2, 3])
};

module.exports = motors;
