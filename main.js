const findBtn = document.querySelector('.findBtn');
const rabbit = document.querySelector('#rabbit');

findBtn.addEventListener('click', () => {
  scrollIntoView('#rabbit');
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('.findBtn');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
