import express from "express";
import userRouter from "./user.routes";
import postRouter from "./post.route";
const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
export default router;
