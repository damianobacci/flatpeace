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

export const getAllFlatshares = async (req, res) => {
  res.status(200).json({ flatshares });
};

export const getSingleFlatshare = async (req, res) => {
  const { id } = req.params;
  const flatshare = flatshares.find((flatshare) => flatshare.id === id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  res.status(200).json({ flatshare });
};

export const createFlatshare = async (req, res) => {
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
};

export const updateFlatshare = async (req, res) => {
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
};

export const deleteFlatshare = async (req, res) => {
  const { id } = req.params;
  const flatshare = flatshares.find((flatshare) => flatshare.id === id);
  if (!flatshare) {
    return res.status(404).json({ message: `No job with id ${id} found.` });
  }
  const newFlatshares = flatshares.filter((flatshare) => flatshare.id !== id);
  flatshares = newFlatshares;
  res.status(200).json({ message: "Flatshare deleted" });
};
