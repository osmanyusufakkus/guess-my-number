'use strict';

const randomNumbers = function (start, end) {
  return Math.floor(Math.random() * end) + start;
};
const deger = randomNumbers(1, 20);
console.log(deger);
let score = document.querySelector('.score').textContent;
let yuksekskor = 0;

const mesajFonk = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  deger = Math.floor(Math.random() * 21);
  console.log(deger);
  score = 20;
  document.querySelector('.score').textContent = 20;
  mesajFonk('Start guessing...');
  document.querySelector('#box').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const tahmin = document.querySelector('.guess').value;
  document.querySelector('.score').textContent = score;

  if (score > 1) {
    if (tahmin <= 20 && tahmin >= 0) {
      if (tahmin == deger) {
        mesajFonk('Congratulations!');
        document.querySelector('#box').textContent = deger;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > yuksekskor) {
          yuksekskor = score;
          document.querySelector('.highscore').textContent = yuksekskor;
        }
      } else if (tahmin !== deger) {
        mesajFonk(tahmin < deger ? 'Too low' : 'Too high');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      mesajFonk('Between 1 and 20!!!');
      document.querySelector('.score').textContent = score;
    }
  } else {
    mesajFonk('You Lost');
    document.querySelector('.score').textContent = 0;
  }

  if (!tahmin) {
    mesajFonk('Enter a number...');
  }
});
