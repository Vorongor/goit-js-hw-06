const nameInputEl = document.querySelector('#name-input');
const nameOitputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
    if (nameInputEl.value !== "") {
       return nameOitputEl.textContent = nameInputEl.value;
    };
    if (nameInputEl.value === "") {
        return nameOitputEl.textContent = "Anonymous";
     };
})
