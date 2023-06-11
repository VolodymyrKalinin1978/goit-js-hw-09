import timerRef from './timer/timer-refs';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { options } from './timer/flatpicer-mod';
import updateTimerUI from './timer/updateTimerUI-mod';
import convertMs from './timer/convertMs-mod';
import timerStyles from './timer/timerStyles-mod';

timerRef.inputBtn.disabled = true;
flatpickr('#datetime-picker', options);

let countdownIntervalId = null;

function startCountdown() {
  const selectedDate = flatpickr.parseDate(timerRef.inputVelue.value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }

  clearInterval(countdownIntervalId);

  countdownIntervalId = setInterval(() => {
    const remainingTime = selectedDate.getTime() - new Date().getTime();
    console.log(new Date());
    if (remainingTime <= 0) {
      clearInterval(countdownIntervalId);
      updateTimerUI(0);
      Notiflix.Notify.success('Countdown finished!');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    updateTimerUI(days, hours, minutes, seconds);
  }, 1000);
  timerRef.inputBtn.disabled = true;
}

Object.assign(timerRef.timerElement.style, timerStyles.timer);

timerRef.fieldElements.forEach(field =>
  Object.assign(field.style, timerStyles.field)
);

timerRef.valueElements.forEach(value =>
  Object.assign(value.style, timerStyles.value)
);

timerRef.labelElements.forEach(label =>
  Object.assign(label.style, timerStyles.label)
);

timerRef.inputBtn.addEventListener('click', startCountdown);
