const inputEl = document.querySelector("#validation-input");
let defaultSimbol = 0;
const checkAmountSimbols = (event) => {
    defaultSimbol = (event.currentTarget.value).length;
    if (defaultSimbol === 6) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    return defaultSimbol;
}
inputEl.addEventListener("change", checkAmountSimbols);


