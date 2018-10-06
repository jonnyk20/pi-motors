// const motors = require('./motors');
const motors = require('./fakeMotors');

toggleMotor = request => {
  const { motorId, command } = request;
  const motor = motors[motorId];
  if (!motor) {
    console.log('no such motor');
    return;
  }
  // motor[command]();
  const go = motor[command];
  console.log('go:', go);
};

module.exports = toggleMotor;
