const numberOfCategories = document.querySelectorAll("ul#categories > .item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const categories = document.querySelectorAll("ul#categories > .item > h2");
categories.forEach(function (category) {
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${category.nextElementSibling.children.length}`);
});




