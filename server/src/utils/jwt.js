const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  console.log(payload);
  const token = jwt.sign(
    { id: payload.id, email: payload.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
  return token;
};

module.exports = {
  createJWT,
};
