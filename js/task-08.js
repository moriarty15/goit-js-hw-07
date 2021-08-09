const inputEl = document.querySelector('input');

const renderButEl = document.querySelector('[data-action="render"]');

const destroyButEl = document.querySelector('[data-action="destroy"]');

const divEl = document.querySelector("#boxes");

let amountEl = 0; // в переменной будет хранится число из input (глобальная
// потому что нужен доступ к переменной из других функций)

const protoType = (amount) => {
    amountEl = amount.currentTarget.value;
}; // функция для получения значения из input

inputEl.addEventListener('input', protoType); //добавил слушателя событий

const createBoxes = () => {
    const array = [];
    for (let i = 0; i < amountEl; i += 1) {
        let colorRed = Math.round(Math.random() * 255);
        let colorGreen = Math.round(Math.random() * 255);
        let colorBlue = Math.round(Math.random() * 255);
        array.push(document.createElement('div'));
        array[i].style.width = `${i * 10 + 30}px`;
        array[i].style.height = `${i * 10 + 30}px`;
        array[i].style.backgroundColor = `rgba(${colorRed},${colorGreen},${colorBlue})`;
    }
    return divEl.append(...array);
}// функция для создания дивов в зависимости от введенного значения amount
// через рандом передал цвет(по другому пока не придумал как), задаёт bgc и 
// размеры, возвращает созданные дивы в html разметку

renderButEl.addEventListener('click', createBoxes); 
// добавил слушателя событий и функцию на кнопку "Создать"

const destroyBoxes = () => {
    const divCollection = divEl.querySelectorAll("div");
    for (const divc of divCollection) {
        divEl.removeChild(divc);
    }
};
// функция по удалению всех созданных элементов(скорее всего можно лучше, надо подумать ещё)

destroyButEl.addEventListener('click', destroyBoxes);
// добавил слушателя событий и функцию на кнопку "Очистить"