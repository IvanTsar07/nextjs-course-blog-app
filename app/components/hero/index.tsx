import React from "react";
import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/my_image.png"}
          alt="My image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Ivan</h1>
      <p>
        I blog about web development - especially frontend frameworks like Vue
        or React
      </p>
    </section>
  );
};

export default Hero;
