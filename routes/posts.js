import express from "express";
import { createPost, getPosts, getSinglePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.delete("/:id", deletePost)
router.patch("/:id", updatePost)


export default router;
