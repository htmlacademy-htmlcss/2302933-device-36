// БЛОК ПРЕИМУЩЕСТВ

const advantages = document.querySelectorAll('.advantages-content-item');
const advantagesButtons = document.querySelectorAll('.advantages-button');

advantagesButtons.forEach((advantagesButton, index) => {
  advantagesButton.addEventListener('click', () => {
    document.querySelector('.advantages-button-active').classList.remove('advantages-button-active');
    advantagesButton.classList.add('advantages-button-active');
    document.querySelector('.advantages-content-item.active').classList.remove('active');
    advantages[index].classList.add('active');
  });
});

// МОДАЛЬНОЕ ОКНО

const modalOpen = document.querySelector('.advantages-delivery-button');
const modalClose = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

modalOpen.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// СЛАЙДЕР

const slidesTabButtons = document.querySelectorAll('.slide-pagination-button');
const slides = document.querySelectorAll('.slide');
const buttonPrevious = document.querySelector('.slide-previous');
const buttonNext = document.querySelector('.slide-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slide-current').classList.remove('slide-current');
  document.querySelector('.slide-pagination-button-active').classList.remove('slide-pagination-button-active');
};

slidesTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slide-current');
    tab.classList.add('slide-pagination-button-active');
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slide-current');
  slidesTabButtons[counter].classList.add('slide-pagination-button-active');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }

  slides[counter].classList.add('slide-current');
  slidesTabButtons[counter].classList.add('slide-pagination-button-active');
});
