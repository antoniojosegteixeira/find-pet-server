import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: { type: String, required: true, select: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

// BCRYPT
userSchema.pre("save", (next) => {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("User", userSchema);

export default User;
