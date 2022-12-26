function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');
const span = document.querySelector('.color');
let hexColor = getRandomHexColor();

const onchangeBtnClick = event => {
  document.body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
};

changeBtn.addEventListener('click', onchangeBtnClick);