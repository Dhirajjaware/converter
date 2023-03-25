'use strict';

const btnConvert = document.querySelector('.btn__convert');
const inputText = document.querySelector('.input__text');
const option = document.querySelector('.input__option');

btnConvert.addEventListener('click', function () {
  const input = inputText.value;

  if (option.value === 'uppercase' && input) {

    inputText.value = input.toUpperCase();

  } else if (option.value === 'lowercase' && input) {

    inputText.value = input.toLowerCase();

  } else if (option.value === 'captilize') {
    inputText.value = input
      .split(' ')
      .map(w => w.replace(w[0], w[0].toUpperCase()))
      .join(' ');
  } else {
    alert('Please enter valid input!');
  }
});
