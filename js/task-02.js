const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const itemList = ingredients.map((e) => {
  const t = document.createElement(`li`);
  t.textContent = e;
  return t;
});
const listEl = document.querySelector('#ingredients');
listEl.append(...itemList);