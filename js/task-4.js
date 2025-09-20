const form = document.querySelector('.login-form');

const labels = form.querySelectorAll('label');
labels.forEach(label => label.classList.add('login-item'));

const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
  input.classList.add('input', 'login-input');
});

const button = form.querySelector('button');
button.classList.add('login-btn');

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = form.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData);

  form.reset();
});
