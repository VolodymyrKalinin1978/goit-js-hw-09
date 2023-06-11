import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import timerRef from './timer-refs';

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      timerRef.inputBtn.disabled = true;
    } else {
      timerRef.inputBtn.disabled = false;
    }
  },
};
