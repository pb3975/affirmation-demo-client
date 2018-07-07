require('dotenv').load();
import getAnswer from '../src/getAffirmation'

test('should provide an affirmation', (done) => {
  const question = 'Will I win the Lottery?';
  var result = getAnswer(question);
  result
  .then((data) => {
    expect(typeof data).toEqual('string');
    done();
  });
})