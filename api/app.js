import express from "express";
import authRoute from "./routes/auth.route.js";
import PostRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use("/api/posts", PostRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});