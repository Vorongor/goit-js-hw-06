const controlerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.dir(controlerEl);

controlerEl.addEventListener('input',onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}