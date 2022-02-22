import User from "../models/User.js";

export const registerController = async (req, res) => {
  /// Check if user already exists
  const { email } = req.body;
  if (await User.findOne({ email })) {
    return res.status(409).send("Email already exists");
  }

  // Creating user
  const newUser = await User.create(req.body);

  // Deleting password from schema
  newUser.password = undefined;

  // Sending
  res.status(200).send(newUser);
};
