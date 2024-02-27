import React from "react";
import Image from "next/image";

import amvision_logo from "@/assets/images/amvision-with-background.jpg";

import styles from "./about-us.module.scss";

export const AboutUs = () => {
  return (
    <section className={styles.about_us}>
      <div className={styles.about_us_content}>
        <h2 className={styles.about_us_header}>
          <span className={styles.about_us_underline} />
          AM VISION
        </h2>
        <span className={styles.about_us_sub_header}>WHO ARE WE</span>
        <p className={styles.about_us_body}>
          We only offer one service as this allow us to really focus on our
          craft and become the best in the industry at it. After all, mastery
          requires a monastic focus. We don’t throw in unnecessary extras just
          to make you feel like it’s your money’s worth.
          <br />
          <br />
          You’ll get more than that with us.
        </p>
      </div>
      <div className={styles.about_us_image_container}>
        <Image
          className={styles.about_us_image}
          src={amvision_logo}
          alt="amvision logo"
        />
      </div>
    </section>
  );
};
