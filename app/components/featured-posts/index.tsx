import React, { FC } from "react";

import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";
import { PostModel } from "../posts/post-item";

export type FeaturedPostsPropsType = {
  posts: PostModel[];
};

const FeaturedPosts: FC<FeaturedPostsPropsType> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>

      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
