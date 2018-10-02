const motors = require('./motorHat');

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
