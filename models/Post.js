import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  animalName: { type: String, required: true },
  species: { type: String, required: true },
  color: { type: String },
  images: [{ type: String }],
  description: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
