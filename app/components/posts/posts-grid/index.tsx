import React, { FC } from "react";

import classes from "./posts-grid.module.css";
import PostItem, { PostModel } from "../post-item";

export type PostsGridPropsType = {
  posts: PostModel[];
};

const PostsGrid: FC<PostsGridPropsType> = ({ posts = [] }) => {
  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem
          key={post.slug}
          post={post}
        />
      ))}
    </ul>
  );
};

export default PostsGrid;
