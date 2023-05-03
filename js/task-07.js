const controlerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.dir(controlerEl);

controlerEl.addEventListener('input', (event) => {
    textEl.style.fontSize = controlerEl.valueAsNumber;
})