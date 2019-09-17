const verifyPasswordLength = require('./constraints/verifyPasswordLength');

module.exports.password = async (event, context) => {
  try {
    const { password } = event.pathParameters;
    await verifyPasswordLength(password);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Todo ok ' + password
      })
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${e.message}`
      })
    }
  }
};