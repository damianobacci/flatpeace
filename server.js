import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";

const port = process.env.PORT || 5100;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.json({ message: "Data received!", data: req.body });
});

app.listen(port, () => {
  console.log("Server is running...");
});
