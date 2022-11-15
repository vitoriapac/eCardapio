import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://vitoriapac:a1b2c3d4@cluster0.g8brn8g.mongodb.net/test"
  )
  .then(() => console.log("Connect on Mongo ✅"))
  .catch(() => console.log("error on Mongo ❌"));

app.listen(3333, () => {
  console.log("🚀 Server listening on http://localhost:3333");
});
