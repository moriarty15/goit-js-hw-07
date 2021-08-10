const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const array = [];
const itemList = ingredients.forEach((e,i) => {
  array.push(document.createElement(`li`));
  array[i].textContent = e;
});
const listEl = document.querySelector('#ingredients');
listEl.append(...array);