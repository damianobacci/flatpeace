// LIBRARIES

import { StatusCodes } from "http-status-codes";

// DATA MODELS
import User from "../models/UserModel.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send("login");
};
