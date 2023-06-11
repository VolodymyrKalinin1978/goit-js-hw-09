import refs from './refs';

export function startColorChange() {
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
  intervalId = setInterval(changeBackgroundColor, 1000);
}

export function stopColorChange() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
}
