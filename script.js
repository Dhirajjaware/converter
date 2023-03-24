'use strict';

const btnConvert = document.querySelector('.btn__convert');
const inputText = document.querySelector('.input__text');
const option = document.querySelector('.input__option');

btnConvert.addEventListener('click', function () {
  const input = inputText.value;

  if (option.value === 'uppercase' && input) {
    const upper = input.toUpperCase();
    inputText.value = upper;
  } else if (option.value === 'lowercase' && input) {
    const lower = input.toLowerCase();
    inputText.value = lower;
  } else if (open.value === 'captilize'){
  }
  else {
    alert('Please enter valid input!');
  }
});
