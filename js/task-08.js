const inputEl = document.querySelector('input');

const renderButEl = document.querySelector('[data-action="render"]');

const destroyButEl = document.querySelector('[data-action="destroy"]');

const divEl = document.querySelector("#boxes");


let amountEl = 0;

const createBoxes = (amount) => {
    amountEl = amount.currentTarget.value;
    console.log(amountEl);
};
inputEl.addEventListener('input', createBoxes);

const protoType = () => {
    const array = [];
    for (let i = 0; i < amountEl; i += 1) {
        let color = Math.round(Math.random() * 255 + 100);
        array.push(document.createElement('div'));
        array[i].style.width = `${i * 10 + 30}px`;
        array[i].style.height = `${i * 10 + 30}px`;
        array[i].style.backgroundColor = `#${color}`;
    console.log(array[i], color);
    }
    divEl.append(...array);
    return array;
}

renderButEl.addEventListener('click', protoType);

const destroyBoxes = () => { };
destroyButEl.addEventListener('click', () => {
    const divCollection = divEl.querySelectorAll("div");
    console.log(divEl);
    console.log(...divCollection);
    for (const divc of divCollection) {
        divEl.removeChild(divc);
    }
});
