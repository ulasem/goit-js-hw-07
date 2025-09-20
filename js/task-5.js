function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

const widgetText = document.querySelector('.widget p');
widgetText.classList.add('widget-text');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
