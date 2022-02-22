import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/index.js";
import { cloudConfig } from "./cloud/cloudinary.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then((response) => {
    app.listen(PORT, () => console.log("Server running on port", PORT));
  })
  .catch((err) => console.log(err.message));

// Configure cloud service
cloudConfig();

app.use("/", router);
