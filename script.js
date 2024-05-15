// script.js
const statusBtn = document.getElementById('statusBtn');
let isAtHome = localStorage.getItem('isAtHome') === 'true';

updateButtonState();

statusBtn.addEventListener('click', () => {
  isAtHome = !isAtHome;
  localStorage.setItem('isAtHome', isAtHome);
  updateButtonState();
});

function updateButtonState() {
  if (isAtHome) {
    statusBtn.textContent = '在宅';
    statusBtn.classList.remove('red');
    statusBtn.classList.add('green');
  } else {
    statusBtn.textContent = '外出';
    statusBtn.classList.remove('green');
    statusBtn.classList.add('red');
  }
}
