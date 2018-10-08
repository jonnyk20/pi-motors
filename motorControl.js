const motors = require('./motors');
// const motors = require('./fakeMotors');

const directions = {
  forward: ['dc1', 'dc2'],
  reverse: ['dc2', 'dc1'],
  left: ['dc3', 'dc4'],
  right: ['dc4', 'dc3']
};

const move = ({ direction }, time = 1000) => {
  const [fwdMotor, reverseMotor] = directions[direction];
  motors[fwdMotor].forward();
  motors[reverseMotor].reverse();
  setTimeout(() => {
    motors[fwdMotor].stop();
    motors[reverseMotor].stop();
  }, time);
};

toggleMotor = request => {
  const { motorId, command } = request;
  const motor = motors[motorId];
  if (!motor) {
    console.log('no such motor');
    return;
  }
  motor[command]();
};

module.exports = { toggleMotor, move };
