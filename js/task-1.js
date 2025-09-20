const categoriesList = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('ul li').length;

  console.log('Category:', title);
  console.log('Elements:', elementsCount);
});

const categories = document.querySelector('#categories');
categories.classList.add('categories');

categoriesList.forEach(category => {
  const titleEl = category.querySelector('h2');
  const listEl = category.querySelector('ul');

  titleEl.classList.add('item-title');
  listEl.classList.add('item-list');
});
