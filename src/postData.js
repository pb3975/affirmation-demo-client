import fetch from 'node-fetch';

const postData = (url = ``, data = {}) => {
  return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .catch(error => console.error(`Fetch Error =\n`, error));
};

module.exports = postData
