function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector('body');
const colorValue = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', onColorBtn);

function onColorBtn (event) {
  let currentColor = getRandomHexColor();
  console.log (currentColor);
  colorValue.textContent = `${currentColor}`;
  body.style.backgroundColor = `${currentColor}`;
}
