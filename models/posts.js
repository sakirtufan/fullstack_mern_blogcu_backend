import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  subTitle: String,
  content: {
    type: String,
    required: [true, "Please provide a content"],
  },
  tag: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
