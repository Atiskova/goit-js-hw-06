const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  return `
    <li class="gallery-item">
      <a href="#">
        <img src="${url}" alt="${alt}" width="${width}" height="${height}">
      </a>
    </li>
  `;
};

// Створення масиву рядків із елементами
const galleryCards = pictures.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCards.join('');
galleryListEl.insertAdjacentHTML('beforeend', galleryCards.join(''));