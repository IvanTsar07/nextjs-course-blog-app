import React, { FC } from "react";
import Image from "next/image";

import classes from "./post-header.module.css";

const PostHeader: FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
