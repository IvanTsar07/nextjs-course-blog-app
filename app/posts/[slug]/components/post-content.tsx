import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: `# Welcome to the playground

  > In case you were wondering what the black box at the bottom is – it's the debug view, showing the current state of the editor. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting.
  
  The playground is a demo environment built with @lexical/react. Try typing in **some text** with *different* formats.
  
  Make sure to check out the various plugins in the toolbar. You can also use #hashtags or @-mentions too!
  
  If you'd like to find out more about Lexical, you can:
  
  - Visit the [Lexical website](https://lexical.dev/) for documentation and more information.
  - Check out the code on our [GitHub repository](https://github.com/facebook/lexical).
  - Playground code can be found [here](https://github.com/facebook/lexical/tree/main/packages/lexical-playground).
  - Join our [Discord Server](https://discord.com/invite/KmG4wQnnD9) and chat with the team.
  
  Lastly, we're constantly adding cool new features to this playground. So make sure you check back here when you next get a chance 🙂.`,
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={imagePath}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
