import { User } from "../models/userModel.js";
import type { Request, Response } from "express";

export const createUser = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const user = await new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get users" });
  }
};
