const timerRef = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  inputBtn: document.querySelector('[data-start]'),
  inputVelue: document.querySelector('#datetime-picker'),
  timerElement: document.querySelector('.timer'),
  fieldElements: document.querySelectorAll('.field'),
  valueElements: document.querySelectorAll('.value'),
  labelElements: document.querySelectorAll('.label'),
};

export default timerRef;
