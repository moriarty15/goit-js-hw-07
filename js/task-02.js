const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const itemList = ingredients.map((e, i, a) => {
  const t = document.createElement(`li`);
  t.textContent = e;
  return t;
});
const listEl = document.querySelector('#ingredients');
listEl.append(...itemList);