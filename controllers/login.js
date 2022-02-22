import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createUserToken } from "../functions/jwt.js";

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

  // Creating session token
  const token = await createUserToken(user._id);

  // Returning user and token
  user.password = undefined;
  user.token = token;
  res.send(user);
};
