const buttons = document.querySelectorAll('button');
const formatCommand = id => {
  console.log(id);
  const [motorId, command] = id.split('-');
  return {
    motorId,
    command
  };
};

const sendCommand = ({ target: { id } }) =>
  fetch('/motors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(formatCommand(id))
  });

buttons.forEach(button => {
  button.addEventListener('click', sendCommand);
});
