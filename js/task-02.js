const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const itemList = () => {
  const array = [];
  for (let i = 0; i < ingredients.length; i += 1) {
    array.push(document.createElement("li"));
    array[i].textContent = ingredients[i];
  }
  return array;
}
const listEl = document.querySelector('#ingredients');
listEl.append(...itemList());