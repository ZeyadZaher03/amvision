import React from "react";
import Image from "next/image";

import amvision_logo from "@/assets/images/amvision.png";

import styles from "./navigation.module.css";
import { Button } from "../button/button";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation_logo_container}>
        <Image
          className={styles.navigation_logo}
          src={amvision_logo}
          alt="amvision logo"
        />
        <h1 className={styles.navigation_logo_text}>AM VISION</h1>
      </div>
      <ul className={styles.navigation_list}>
        <li>
          <a className={styles.navigation_link} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navigation_link} href="#">
            Services
          </a>
        </li>
        <li>
          <a className={styles.navigation_link} href="#">
            About US
          </a>
        </li>
        <li>
          <Button fontSize={19} isLink={true} href="#book-an-appointment">
            Book an Appointment
          </Button>
        </li>
      </ul>
    </nav>
  );
};
