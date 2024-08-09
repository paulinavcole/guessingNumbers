'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessageChange = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessageChange('No number! 🥵');
    // document.querySelector('.message').textContent = 'No number! 🥵';

    //when player wins
  } else if (guess === secretNumber) {
    displayMessageChange('Correct number!👹');
    // document.querySelector('.message').textContent = 'Correct number!👹';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is too high
  }

  // if guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessageChange('Too High!');
      } else if (guess < secretNumber) {
        displayMessageChange('Too Low!');
      }
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessageChange('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // restore initial values of the score and secretNumber variable
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restore initial conditions of the message
  displayMessageChange('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;

  // reset styles
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
