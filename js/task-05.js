const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const changeNameGuest = (event) => {
    const valueCurrent = event.currentTarget.value;
    valueCurrent === ''
        ? spanEl.textContent = 'незнакомец'
        : spanEl.textContent = valueCurrent;
    
}
inputEl.addEventListener('input', changeNameGuest);
