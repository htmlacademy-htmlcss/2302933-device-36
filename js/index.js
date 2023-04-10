const advantages = document.querySelectorAll('.advantages-content-item');
const advantagesButtons = document.querySelectorAll('.advantages-button');

advantagesButtons.forEach((advantagesButton, index) => {
  advantagesButton.addEventListener('click', () => {
    document.querySelector('.advantages-button.active').classList.remove('active');
    advantagesButton.classList.add('active');
    document.querySelector('.advantages-content-item.active').classList.remove('active');
    advantages[index].classList.add('active');
  });
});
