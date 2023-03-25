'use strict';

const btnConvert = document.querySelector('.btn__convert');
const inputText = document.querySelector('.input__text');
const inputOption = document.querySelector('.input__option');

btnConvert.addEventListener('click', function () {
  const input = inputText.value;
  const option = inputOption.value;

  if (option === 'uppercase' && input) {

    inputText.value = input.toUpperCase();

  } else if (option === 'lowercase' && input) {

    inputText.value = input.toLowerCase();

  } else if (option === 'captilize') {
    inputText.value = input
      .split(' ')
      .map(w => w.replace(w[0], w[0].toUpperCase()))
      .join(' ');
  } else {
    alert('Please enter valid input!');
  }
});

