'use strict';

let compNumber = Math.trunc(Math.random() * 20) + 1;
console.log(compNumber);

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number! ';
  } else if (guess > compNumber) {
    document.querySelector('.message').textContent = '👆 Too High! ';
  } else if (guess < compNumber) {
    document.querySelector('.message').textContent = '👇 Too Low! ';
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number! ';
  }
});
