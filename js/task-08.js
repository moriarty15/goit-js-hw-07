const inputEl = document.querySelector('input');
console.log(inputEl);

const renderButEl = document.querySelector('[data-action="render"]');
console.log(renderButEl);
const destroybutEl = document.querySelector('[data-action="destroy"]');
console.log(destroybutEl);

let amountEl = 0;

// ФУНКЦИЯ СОЗДАЁТ УКАЗАННОЕ КОЛ-ВО ДИВОВ
const createBoxes = (amount) => {
    amountEl = amount.currentTarget.value;
    console.log(amountEl);
};

// ФУНКЦИЯ УДАЛЯЕТ ВСЕ ДИВЫ(ОБНОВЛЯЕТ)
const destroyBoxes = () => { };

inputEl.addEventListener('input', createBoxes)
renderButEl.addEventListener('click', () => {
    const array = [];
    for (let i = 0; i < amountEl; i += 1) {
        array.push(document.createElement('div'));
        array[i].style.backGroundColor = Object.values(bgcExc);
    console.log(array[i], array[i].style);
    }
});
destroybutEl.addEventListener('click', () => { });
let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);
const bgcExc = {
    red,
    green,
    blue,
};
console.log(bgcExc);
console.log(...Object.values(bgcExc));
console.log(bgcExc.red);
console.log(bgcExc.green);
console.log(bgcExc.blue);
