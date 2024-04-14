import React from "react";

import classes from "./page.module.css";
import PostsGrid from "../components/posts/posts-grid";
import { PostModel } from "../components/posts/post-item";

const DUMMY_POSTS: PostModel[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a Next.js project and deploy it on Vercel.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a Next.js project and deploy it on Vercel.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a Next.js project and deploy it on Vercel.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a Next.js project and deploy it on Vercel.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a great developer experience and many awesome features. In this article, you'll learn how to create a Next.js project and deploy it on Vercel.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt: "Next.js is a React framework that",
    date: "2022-02-10",
  },
];

const PostsPage = () => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>

      <PostsGrid posts={DUMMY_POSTS} />
    </section>
  );
};

export default PostsPage;
