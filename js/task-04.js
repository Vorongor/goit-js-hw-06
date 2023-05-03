const counter = document.querySelector('#counter');
let valueCounter = document.querySelector('#value');
const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');

incrBtn.addEventListener('click', () =>{
    valueCounter.textContent = Number(valueCounter.textContent) + 1; 
});

decrBtn.addEventListener('click', () =>{
    valueCounter.textContent = Number(valueCounter.textContent) - 1; 
});