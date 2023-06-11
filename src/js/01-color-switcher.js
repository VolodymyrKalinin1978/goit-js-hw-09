const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorChange() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  const hexLetters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}
