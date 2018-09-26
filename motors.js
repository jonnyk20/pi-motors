class Motor {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(this.name, 'turning on');
  }
  stop() {
    console.log(this.name, 'turning off');
  }
}

const motors = {
  m1: new Motor('m1'),
  m2: new Motor('m2'),
  m3: new Motor('m3'),
  m3: new Motor('m4')
};

const isMotorOn = {
  m1: false,
  m2: false,
  m3: false,
  m4: false
};

toggleMotor = motorId => {
  if (!motors[motorId]) {
    return;
  }
  if (isMotorOn[motorId]) {
    motors[motorId].stop();
    isMotorOn[motorId] = false;
    return;
  } else {
    motors[motorId].start();
    isMotorOn[motorId] = true;
  }
};

module.exports = toggleMotor;
