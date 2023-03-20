import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const min = document.querySelector('span[data-minutes]');
const sec = document.querySelector('span[data-seconds]');

let timerId = null;
btn.disabled = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future time ))))');
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(input, options);
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
btn.addEventListener('click', onBtnClick);
function onBtnClick() {
  timerId = setInterval(() => {
    btn.disabled = true;
    let timeDifference = new Date(input.value) - new Date();

    if (timeDifference >= 0) {
      let timeObject = convertMs(timeDifference);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      min.textContent = addLeadingZero(timeObject.minutes);
      sec.textContent = addLeadingZero(timeObject.seconds);
      if (timeDifference <= 10000) {
        timer.style.color = 'red';
      }
    } else {
      Notiflix.Notify.success('Timer finished!!!');
      timer.style.color = 'black';
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
