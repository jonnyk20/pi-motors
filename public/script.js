const buttons = document.querySelectorAll('.motor');
const sendCommand = e =>
  fetch('/motors', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      motorId: e.target.id
    })
  });

console.log('buttons', buttons);

buttons.forEach(button => {
  button.addEventListener('click', sendCommand);
});
