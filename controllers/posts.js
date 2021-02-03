import Post from "../models/posts.js";
import errorWrapper from "../helpers/error/errorWrapper.js";
import CustomError from "../helpers/error/CustomError.js";

export const getPosts = errorWrapper(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

export const getSinglePost = errorWrapper(async (req, res) => {
  const { id: _id } = req.params;
  const post = await Post.findById(_id);
  res.status(200).json(post);
});

export const createPost = errorWrapper(async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  await newPost.save();
  res.status(201).json(newPost);
});

export const deletePost = errorWrapper(async (req, res) => {
  const { id: _id } = req.params;

  const deletedPost = await Post.findByIdAndRemove(_id);
  res.json(deletedPost);
});

export const updatePost = errorWrapper(async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedPost);
});
