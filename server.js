import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";

let flatshares = [
  {
    id: nanoid(),
    name: "test",
    members: [nanoid(), nanoid()],
  },
  {
    id: nanoid(),
    name: "test",
    members: [nanoid(), nanoid()],
  },
];

const port = process.env.PORT || 5100;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/api/v1/flatshares", (req, res) => {
  res.status(200).json({ flatshares });
});

app.get("/api/v1/flatshares/:id", (req, res) => {
  const { id } = req.params;
  const flatshare = flatshares.find((flatshare) => flatshare.id === id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  res.status(200).json({ flatshare });
});

app.patch("/api/v1/flatshares/:id", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for your flatshare" });
  }
  const { id } = req.params;
  const flatshare = flatshares.find((flatshare) => flatshare.id === id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  flatshare.name = name;
  res.status(200).json({ message: "Flatshare modified", flatshare });
});

app.delete("/api/v1/flatshares/:id", (req, res) => {
  const { id } = req.params;
  const flatshare = flatshares.find((flatshare) => flatshare.id === id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  const newFlatshares = flatshares.filter((flatshare) => flatshare.id !== id);
  flatshares = newFlatshares;
  res.status(200).json({ message: "Flatshare deleted" });
});

app.post("/api/v1/flatshares", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for your flatshare" });
  }
  const id = nanoid();
  const members = [nanoid(), nanoid()];
  const flatshare = {
    id,
    name,
    members,
  };
  flatshares.push(flatshare);
  res.status(200).json({ flatshare });
});

app.listen(port, () => {
  console.log("Server is running...");
});
