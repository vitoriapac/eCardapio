import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect(
    "mongodb+srv://vitoriapac:a1b2c3d4@cluster0.g8brn8g.mongodb.net/test"
  )
  .then(() => {
    const app = express();
    const port = 3333;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log("🚀 Server listening on http://localhost:3333");
    });
  })
  .catch(() => console.log("Error on Mongo ❌"));
