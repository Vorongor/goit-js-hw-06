function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainBox = document.querySelector('#boxes');
const ctrPad = document.querySelector("#controls");
const ctrValue = ctrPad.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


createBtn.addEventListener('click', onCreateBtn);
function onCreateBtn (event) {
  const blocks = ctrPad.firstElementChild.value;
  alert(`Увага! Кількість блоків що створюється: ${blocks}`);
  console.log(blocks);
  const packOfBlocks = [];

  for (let i = 0; i < blocks; i += 1) {
    const block = document.createElement('div');
    const w = 30 + i * 10;
    const h = 30 + i * 10;
    block.style.width = `${w}px`;
    block.style.height = `${h}px`;
    block.style.backgroundColor = `${getRandomHexColor()}`;
    packOfBlocks.push(block);
  };

  console.log(packOfBlocks);

  mainBox.append(...packOfBlocks);

};

destroyBtn.addEventListener('click', onDestroyBtn);

function onDestroyBtn (event) {
  mainBox.innerHTML = "";
  alert("Всі блоки буде знищено!!");
}