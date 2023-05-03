const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// 1. Створюємо елемент лі,
// 2. Додаємо текстовий вміст,
// 3. Додаємо клас, вставити всі лі в ДОМ
const recepie = document.querySelector("#ingredients");
const newList = ingredients.map( ingredient => {
  let listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
  });
console.log (newList); 
recepie.append(...newList);