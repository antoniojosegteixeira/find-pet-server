import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
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
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

// BCRYPT
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
