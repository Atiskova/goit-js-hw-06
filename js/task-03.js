const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute(
  "style",
  "list-style-type:none; display: flex; flex-wrap: wrap; gap: 30px;"
);

// galleryListEl.style.list-style = "none";
console.log(galleryListEl);
// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ url, alt } = {}) => {
  return `
    <li class="gallery-item">
      <a href="#">
        <img src="${url}" alt="${alt}" width = auto height = 500>
      </a>
    </li>
  `;
};

// Створення масиву рядків із елементами
const galleryCards = images.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

// Вставка елементів на сторінку
galleryListEl.insertAdjacentHTML("beforeend", galleryCards.join(""));
