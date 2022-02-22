import User from "../models/User.js";
import { createUserToken } from "../functions/jwt.js";
export const registerController = async (req, res) => {
  /// Check if user already exists
  const { email } = req.body.data;
  if (await User.findOne({ email })) {
    return res.status(409).send("Email already exists");
  }

  // Creating user
  const newUser = await User.create(req.body.data);

  // Deleting password from schema
  newUser.password = undefined;

  // Creating session token
  const token = await createUserToken(newUser._id);
  newUser.token = token;

  // Sending
  res.status(200).send(newUser);
};
