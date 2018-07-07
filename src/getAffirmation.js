import fetch from 'node-fetch';

const getAffirmation = () => {
  const baseUrl = process.env.BASE_URL;
  const uri = `${baseUrl}/affirmations`;
  return new Promise((resolve, reject) => {
    fetch(uri)
    .then(response => {
      if (response.ok) {
        response = response.json()
        .then(data => {
          console.log
          var rand = [Math.floor(Math.random()*data.length)];
          resolve(data[rand].text);
        })

      } else {
        alert('There was an error with your request. Please try again');
        reject(`Request rejected with status ${response.status}`);
      }
    })
  })
}

module.exports = getAffirmation
