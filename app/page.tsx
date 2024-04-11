import Hero from "./components/hero";
import FeaturedPosts from "./components/featured-posts";
import { PostModel } from "./components/posts/post-item";

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

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
