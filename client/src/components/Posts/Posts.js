import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log("POSTS:", posts);
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Posts</h1>
      <Post />
      <Post />
    </React.Fragment>
  );
};

export default Posts;
