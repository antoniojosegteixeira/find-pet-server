import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/index.js";

const app = express();

app.use(cors());

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then((response) => {
    app.listen(PORT, () => console.log("Server running on port", PORT));
  })
  .catch((err) => console.log(err.message));

app.use("/", router);
