import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import classes from "./post-item.module.css";

export type PostModel = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
};

export type PostItemPropsType = {
  post: PostModel;
};

const PostItem: FC<PostItemPropsType> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.post}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
