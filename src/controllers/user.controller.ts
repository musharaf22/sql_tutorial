import { Request, Response } from "express";
import { Op } from "sequelize";
import db from "../models";

const User = db.User;

const getAlluser = async (_req: Request, res: Response) => {
  try {
    const user = await User.findAll({ raw: true });

    res.json({
      error: false,
      message: "User Retrieved Successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({ error: true, message: error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    console.log("hitting");
    const { name, mobile, address, email } = req.body;

    Object.entries({ name, mobile, address, email }).forEach(([key, value]) => {
      if (!value) {
        return res
          .status(400)
          .json({ error: true, message: `${key} is missing` });
      }
    });
    const existUser = await User.findAll({
      [Op.or]: [{ mobile }, { email }],
      raw: true,
    });
    if (existUser) {
      return res.status(400).json({
        error: true,
        message: "User Already Exist",
      });
    }
    const user = await User.create({ name, mobile, address, email });

    return res
      .status(200)
      .json({ error: false, message: "User Created Successfully", data: user });
  } catch (error: any) {
    res.status(500).json({ error: true, message: error.message });
  }
};

const userController = {
  getAlluser,
  createUser,
};

export default userController;
