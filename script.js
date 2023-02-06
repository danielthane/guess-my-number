'use strict';

let compNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  // NO GUESS GIVEN
  if (!guess) {
    displayMessage('⛔ No Number! ');
  }

  //WHEN GUESS IS WRONG
  else if (guess !== compNumber) {
    if (score > 1) {
      displayMessage(guess > compNumber ? '👆 Too High! ' : '👇 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // WINNING GUESS
  else {
    displayMessage('🎉 Correct Number! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  compNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
