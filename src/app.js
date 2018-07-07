require('dotenv').load();

import getAffirmation from './getAffirmation';
import getSentimentScore from './getSentimentScore';
import postData from './postData';

const baseUrl = process.env.BASE_URL;
const input = document.querySelector('#userInput');
const output = document.querySelector('#output');
const form = document.querySelector('#form');
const affirmationButton = document.querySelector('#getAffirmButton');

affirmationButton.addEventListener('click', () => {
  getAffirmation()
    .then((response) => {
      output.innerText = response;
    })
    .catch(console.error);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!!input.value) {
    if (getSentimentScore(input.value)) {
      return new Promise((resolve,reject) => {
        postData(`${baseUrl}/affirmations`, {'text':input.value} )
        .then(() => {
          input.value = '';
          alert("Thank you! Your submission has been accepted and added to the affirmations.")
        })
        .catch(error => console.error(`Error =\n`, error))
      })
    } else {
      alert("Sorry that doesn't sound very positive, try something a bit nicer.")
    }
  } else {
    alert('You need to input an affirmation to submit it')
  }
});
