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


const modalOpen = document.querySelector('.advantages-delivery-button');
const modalClose = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

modalOpen.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});
