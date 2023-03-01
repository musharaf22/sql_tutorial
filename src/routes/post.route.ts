import express from "express";
import postController from "../controllers/post.controller";

const router = express.Router();

router.post("/", postController.createPost);
router.get("/", postController.getAllPost);

export default router;
