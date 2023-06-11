import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import timerStyles from './timer/timerStyles-mod';
import { timerRef, ref } from './timer/timer-refs';

ref.btnTimerStart.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] - currentDate > 0) {
      ref.btnTimerStart.disabled = false;
    } else {
      ref.btnTimerStart.disabled = true;
      Notify.failure('Please choose a date in the future', {
        timeout: 1500,
        width: '400px',
      });
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = fp.selectedDates[0];

  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    ref.btnTimerStart.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  ref.timerFieldDays.textContent = addLeadingZero(days);
  ref.timerFielHours.textContent = addLeadingZero(hours);
  ref.timerFieldMinutes.textContent = addLeadingZero(minutes);
  ref.timerFieldSeconds.textContent = addLeadingZero(seconds);
}

const fp = flatpickr('#datetime-picker', options);

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

ref.btnTimerStart.addEventListener('click', onTimerStart);
