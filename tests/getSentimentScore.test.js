require('dotenv').load();
import getSentimentScore from '../src/getSentimentScore'

describe('getSentimentScore function', () => {
  test('should return false when given a negative statement', () => {
    const text = 'You suck!';
    var result = getSentimentScore(text);
    expect(result).toEqual(false);
  })

  test('should return true when given a positive statement', () => {
    const text = 'You are awesome!';
    var result = getSentimentScore(text);
    expect(result).toEqual(true);
  })
})
