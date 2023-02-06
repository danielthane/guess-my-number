'use strict';

let compNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(compNumber);

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = guess;
  // NO GUESS GIVEN
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number! ';
  }
  // GUESS TOO HIGH
  else if (guess > compNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Too High! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // GUESS TOO LOW
  else if (guess < compNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👆 Too low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // WINNING GUESS
  else {
    document.querySelector('.message').textContent = '🎉 Correct Number! ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});
