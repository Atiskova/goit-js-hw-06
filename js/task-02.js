const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsListEl = document.querySelector('#ingredients');

// Функція
const makeIngredientsCard = ( ingredient  = {}) => {
  // Створення li
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.classList.add('item');

  const ingredientsTextEl = document.createElement('p');
  ingredientsTextEl.innerHTML = ingredient;
  ingredientsListEl.append(ingredientsTextEl);

  return ingredientsListEl;
};

// Перебір масиву через map
const ingredientsCardsEl = ingredients.map((el, idx, arr) => {
  return makeIngredientsCard(el);
});

// Вставка на сторінку
ingredientsListEl.append(...ingredientsCardsEl);  