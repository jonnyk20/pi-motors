const { dcMotors, stepperMotor } = require('./motors');

const isMotorOn = {
  m1: false,
  m2: false,
  m3: false,
  m4: false
};

toggleMotor = motorId => {
  if (!dcMotors[motorId]) {
    return;
  }
  if (isMotorOn[motorId]) {
    dcMotors[motorId].stop();
    isMotorOn[motorId] = false;
    return;
  } else {
    dcMotors[motorId].start();
    isMotorOn[motorId] = true;
  }
};

module.exports = toggleMotor;
