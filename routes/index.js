import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("works");
});

router.post("/register", (req, res) => {
  res.send("works");
});

export default router;
