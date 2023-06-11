import timerRef from './timer-refs';

function updateTimerUI(days, hours, minutes, seconds) {
  timerRef.days.textContent = addLeadingZero(days);
  timerRef.hours.textContent = addLeadingZero(hours);
  timerRef.minutes.textContent = addLeadingZero(minutes);
  timerRef.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
export default updateTimerUI;
