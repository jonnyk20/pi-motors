const directions = {
  forward: ['dc1', 'dc2'],
  reverse: ['dc2', 'dc1'],
  left: ['dc3', 'dc4'],
  right: ['dc4', 'dc3']
};

const move = (motors, { direction }, time = 1000) => {
  const [fwdMotor, reverseMotor] = directions[direction];
  motors[fwdMotor].forward(255);
  // motors[reverseMotor].reverse();
  setTimeout(() => {
    motors[fwdMotor].stop();
    // motors[reverseMotor].stop();
  }, time);
};

toggleMotor = (motors, request) => {
  const { motorId, command } = request;
  const motor = motors[motorId];
  if (!motor) {
    console.log('no such motor');
    return;
  }
  motor[command]();
};

module.exports = { toggleMotor, move };
