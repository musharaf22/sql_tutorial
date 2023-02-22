import { Request, Response } from "express";
import db from "../models";

const User = db.user;

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, mobile, address, email } = req.body;
    Object.entries({ name, mobile, address, email }).forEach(([key, value]) => {
      if (!value) {
        return res
          .status(400)
          .json({ error: true, message: `${key} is missing` });
      }
    });
    const user = await User.create({ name, mobile, address, email });
    res
      .status(200)
      .json({ error: false, message: "User Created Successfully", data: user });
  } catch (error: any) {
    res.status(500).json({ error: true, message: error.message });
  }
};

const userController = {
  createUser,
};

export default userController;
