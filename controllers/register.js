import User from "../models/User.js";

export const registerController = async (req, res) => {
  /// Check if email already exists
  const { email } = req.body;
  if (await User.findOne({ email })) {
    return res.send().status(409).send("Email already exists");
  } else {
    res.send().status(200);
  }
};
