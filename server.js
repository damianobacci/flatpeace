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

app.listen(port, () => {
  console.log("Server is running...");
});
