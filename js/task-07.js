const inputEl = document.querySelector("#font-size-control");

const changeFontSize = () => {
    return document.querySelector("#text").style.fontSize =
        `${Number(inputEl.value) + 50}%`;
};
inputEl.addEventListener('input', changeFontSize);


