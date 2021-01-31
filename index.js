import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'

// Environment Variables
dotenv.config({
  path: "./config/config.env",
});

//MongoDb Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb Connection Successful");
  })
  .catch((err) => {
    console.error(err.message);
  });

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    author: "Sakir Tufan",
    message: "Fullstatck_Mern_Blogcu "
  })
});

app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}:${process.env.NODE_ENV}`);
});
