// const categoryList = document.querySelector("#categories");
// console.log(categoryList);
// const categoryItem = categoryList.querySelectorAll(".item");
// console.log(categoryItem);
// const animals = categoryItem[0].querySelector("h2");
// console.log('Категория:', animals.textContent);
// const AmountAnimalsEl = categoryItem[0].querySelectorAll("li");
// console.log('Количество:', AmountAnimalsEl.length);

// const productEl = categoryItem[1].querySelector('h2');
// console.log('Категория:', productEl.textContent);
// const AmountProductEl = categoryItem[1].querySelectorAll('li');
// console.log('Количество:', AmountProductEl.length);

// const TechEl = categoryItem[2].querySelector('h2');
// console.log('Категория:', TechEl.textContent);
// const AmountTechEl = categoryItem[2].querySelectorAll('li');
// console.log('Количество:', AmountTechEl.length);

const category = () => {
    const categoriesEl = document.querySelector('#categories');
    const itemEl = categoriesEl.querySelectorAll('.item');
    itemEl.forEach(element => {
        console.log('Категория:', element.querySelector('h2').textContent);
        console.log('Количество:',element.querySelectorAll('li').length);
    });
}
category();
