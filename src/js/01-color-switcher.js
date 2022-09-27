const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyColor: document.querySelector('body'),
}
    let randomHexColor = null;
    let interval = null;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

refs.btnStop.setAttribute('disabled', '');

    function onBtnStart() {
        refs.btnStop.removeAttribute('disabled');
        refs.btnStart.setAttribute('disabled', '');
        interval = setInterval(() => changeBodyBgColor(), 1000);
    }

    function onBtnStop() {
        refs.btnStart.removeAttribute('disabled');
        refs.btnStop.setAttribute('disabled', '');
        clearInterval(interval);
    }
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    function changeBodyBgColor() {
        randomHexColor = getRandomHexColor();
        refs.bodyColor.style.backgroundColor = randomHexColor;
    }