import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";

import flatshareRouter from "./routers/flatsharesRouter.js";

const port = process.env.PORT || 5100;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/flatshares", flatshareRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong..." });
});

app.listen(port, () => {
  console.log("Server is running...");
});
