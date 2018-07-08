var Sentiment = require('sentiment');
var sentiment = new Sentiment();

const getSentimentScore = (text) => {
  const score = sentiment.analyze(text).score;
  if (score < 0) {
    return false
  } else {
    return true;
  }
}

module.exports = getSentimentScore
