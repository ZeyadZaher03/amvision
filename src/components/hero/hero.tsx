import React from "react";
import Image from "next/image";

import styles from "./hero.module.scss";
import { Button } from "../button/button";

import amvision_logo from "@/assets/images/amvision.png";

export const Hero = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header_content_wrapper}>
        <h1 className={styles.heading}>
          <span className={styles.heading_underline} />
          empower your brand <br />
          with experts
        </h1>
        <Button isLink={true} href="#book-an-appointment">
          GET STARTED NOW
        </Button>
      </section>
      <div className={styles.grid_wrapper}>
        <div className={styles.grid_wrapper_horizontal}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.grid_wrapper_vertical}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.header_logo_container}>
        <Image
          className={styles.header_logo}
          alt="amvision logo"
          src={amvision_logo}
        />
      </div>
    </header>
  );
};
