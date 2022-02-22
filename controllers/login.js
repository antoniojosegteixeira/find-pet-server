import User from "../models/User.js";
import bcrypt from "bcrypt";

export const loginController = async (req, res) => {
  const { email, password } = req.body.data;

  // Getting user
  const user = await User.findOne({ email }).select("+password");

  // Returning if user is not found
  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  // Comparing passwords
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ error: "Invalid password" });
  }

  // Returning user
  user.password = undefined;
  res.send({ user });
};
