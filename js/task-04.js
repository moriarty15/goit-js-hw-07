const valueEl = document.querySelector('#value');

let counterValue = Number(valueEl.textContent);

const decrement  = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const increment  = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const incEl = document.querySelector('[data-action="increment"]');
incEl.addEventListener('click', increment);

const decEl = document.querySelector('[data-action="decrement"]');
decEl.addEventListener('click', decrement);
