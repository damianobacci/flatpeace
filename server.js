// EXPRESS ASYNC ERRORS package
import "express-async-errors";

// DONTENV
import * as dotenv from "dotenv";
dotenv.config();

// LIBRARIES
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// ROUTERS
import flatshareRouter from "./routers/flatsharesRouter.js";

// MIDDLEWARES
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { validateTest } from "./middlewares/ValidationMiddleware.js";

//-----------------------

const port = process.env.PORT || 5100;

const app = express();

// MORGAN OUTPUT ON THE CONSOLE

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// JSON MIDDLEWARE

app.use(express.json());

app.post("/api/v1/test", validateTest, (req, res) => {
  const { name } = req.body;
  res.json({ message: `hello ${name}` });
});

// FLATSHARE ROUTE

app.use("/api/v1/flatshares", flatshareRouter);

// CATCH-ALL ROUTE

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

// ERROR ROUTE

app.use(errorHandlerMiddleware);

// INITIALIZE APP AND CONNECT TO MONGODB

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}...`);
  });
} catch {
  console.log(error);
  process.exit(1);
}
