import { nanoid } from "nanoid";
import Flatshare from "../models/FlatshareModel.js";

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

export const getAllFlatshares = async (req, res) => {
  const flatshares = await Flatshare.find({});
  res.status(200).json({ flatshares });
};

export const getSingleFlatshare = async (req, res) => {
  const { id } = req.params;
  const flatshare = await Flatshare.findById(id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  res.status(200).json({ flatshare });
};

export const createFlatshare = async (req, res) => {
  const name = req.body.name;
  const members = [nanoid(), nanoid()];
  const flatshare = await Flatshare.create({ name, members });
  res.status(201).json({ flatshare });
};

export const updateFlatshare = async (req, res) => {
  const { id } = req.params;
  const updatedflatshare = await Flatshare.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedflatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  res.status(200).json({ message: "Flatshare modified", updatedflatshare });
};

export const deleteFlatshare = async (req, res) => {
  const { id } = req.params;
  const removedFlatshare = await Flatshare.findByIdAndDelete(id);
  if (!removedFlatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  res
    .status(200)
    .json({ message: "Flatshare deleted", flatshare: removedFlatshare });
};
