const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

const menuBtn2 = document.querySelector('.two');


menuBtn2.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});