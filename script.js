'use strict';
let deger = Math.floor(Math.random() * 21);
console.log(deger);

let score = document.querySelector('.score').textContent;
let yuksekskor = 0;
document.querySelector('.again').addEventListener('click', function () {
  deger = Math.floor(Math.random() * 21);
  console.log(deger);
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Tahmine başla...';
  document.querySelector('#kutu').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const tahmin = document.querySelector('.guess').value;
  document.querySelector('.score').textContent = score;

  if (score > 1) {
    if (tahmin <= 20 && tahmin >= 0) {
      if (tahmin == deger) {
        document.querySelector('.message').textContent = 'Helal lan';
        document.querySelector('#kutu').textContent = deger;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > yuksekskor) {
          yuksekskor = score;
          document.querySelector('.highscore').textContent = yuksekskor;
        }
      } else if (tahmin < deger) {
        document.querySelector('.message').textContent = 'Düşük';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (tahmin > deger) {
        document.querySelector('.message').textContent = 'Yüksek';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'La düzgün sayı gir';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Hakkın bitti. Kaybettin';
    document.querySelector('.score').textContent = 0;
  }

  if (!tahmin) {
    document.querySelector('.message').textContent = 'Bir sayı yaz...';
  }
});
