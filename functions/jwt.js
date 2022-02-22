import jwt from "jsonwebtoken";

export const createUserToken = async (_id) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
  return token;
};
