import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmitBtn);
formEl.addEventListener('input', onInput);

let data = {};

function onInput(e) {
  data[e.target.name] = Number(e.target.value);
}

function onSubmitBtn(e) {
  e.preventDefault();
  promiseLoop();
  e.currentTarget.reset();
}
function promiseLoop() {
  for (let i = 1; i <= data.amount; i += 1) {
    let delay = (data.delay += data.step) - data.step;
     let positiveDelay = delay;
    if ((delay || i) <= 0 ) {
      notiFyInfo();
     break 
    } 
      setTimeout(() => {
        createPromise(i, delay);
      }, positiveDelay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    notiFySucces(position, delay);
  } else {
    notiFyFailure(position, delay);
  } 
}

function notiFySucces(position, delay) {
  Notify.success(`Fullfilled promise ${position} in ${delay} ms`);
}

function notiFyFailure(position, delay) {
  Notify.failure(`Rejected promise ${position} in ${delay} ms`);
}

function notiFyInfo() {
  Notify.info('values must be positive');
}

