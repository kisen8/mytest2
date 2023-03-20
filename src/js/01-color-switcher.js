const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
const TIME_DEFAULT = 1000;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', onStartClick);
function onStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, TIME_DEFAULT);
}

btnStop.addEventListener('click', onStopClick);
function onStopClick() {
  btnStop.disabled = true;
  btnStart.disabled = false;
  clearInterval(timerId);
}
