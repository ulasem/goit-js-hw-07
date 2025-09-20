const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.classList.add('input');
outputEl.closest('h1').classList.add('title');

inputEl.addEventListener('input', event => {
  const value = event.target.value.trim();
  outputEl.textContent = value === '' ? 'Anonymous' : value;
});
