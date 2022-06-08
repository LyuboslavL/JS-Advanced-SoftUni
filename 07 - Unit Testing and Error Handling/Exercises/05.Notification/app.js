function notify(message) {
  let notificationDivEl = document.querySelector('#notification');
  let pElement = document.createElement('p');
  pElement.textContent = message;
  notificationDivEl.appendChild(pElement);
  console.log(notificationDivEl);

  notificationDivEl.style.display = 'block';

  notificationDivEl.addEventListener('click', function(e) {
    notificationDivEl.style.display = 'none';
  })
}