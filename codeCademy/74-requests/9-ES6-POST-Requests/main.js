// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
