const zxcvbn = require('zxcvbn');

module.exports = password => {
  const score = zxcvbn(password).score
  if (score < 2) {
    return Promise.reject(
      {
        message: 'Password is weak',
        score
      }
    );
  }
  return Promise.resolve({
    message: 'Password meets criteria, strong password',
    score
  });
};
