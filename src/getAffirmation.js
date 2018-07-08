import fetch from 'node-fetch';

const getAffirmation = () => {
  const baseUrl = process.env.BASE_URL;
  const uri = `${baseUrl}/affirmations`;
  return new Promise((resolve, reject) => {
    fetch(uri)
    .then((response) => {
      if (response.ok) {
        response = response.json()
        .then(data => {
          console.log
          const rand = [Math.floor(Math.random()*data.length)];
          resolve(data[rand].text);
        })
      } else {
        reject(`Request rejected with status ${response.status}`);
      }
    })
  })
}

module.exports = getAffirmation
