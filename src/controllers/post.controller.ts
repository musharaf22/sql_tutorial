import { Request, Response } from "express";
import db from "../models";

const User = db.User;
const Post = db.Post;
const createPost = async (req: Request, res: Response) => {
  try {
    const { title, image, content, userId } = req.body;
    if (!userId) {
      return res
        .status(400)
        .json({ error: true, message: "Please login Yourself First" });
    }
    const userDetails = await User.findOne({
      where: { id: userId },
      raw: true,
    });
    if (!userDetails) {
      return res.status(400).json({ error: true, message: "No user found" });
    }
    const post = await Post.create({ title, image, content, userId });
    res
      .status(200)
      .json({ error: false, message: "Post Created Successfully", data: post });
  } catch (error: any) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

const postController = {
  createPost,
};

export default postController;
