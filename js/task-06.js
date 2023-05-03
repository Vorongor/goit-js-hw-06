{/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */}

const inputSelector = document.querySelector('#validation-input')

console.log(inputSelector.dataset.length);

inputSelector.addEventListener('blur', (event) => {
    if (inputSelector.value.length >= inputSelector.dataset.length) {
        inputSelector.classList.add('valid');
        console.log(inputSelector.value.length);
        
    } else {
        inputSelector.classList.add('invalid');
        console.log(inputSelector.value.length);
    };
});