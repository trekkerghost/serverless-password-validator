module.exports = password => {
  if (password.length < 6) {
    return Promise.reject(
      new Error('The password is too short'),
    );
  }
  return Promise.resolve({
    message: 'Passsword meets criteria',
  });
};
