"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../button/button";

import amvision_logo from "@/assets/images/amvision.png";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [mobileNavClasses, setMobileNavClasses] = useState(
    styles.navigation_list_mobile
  );
  useEffect(() => {
    let mobileNavClasses = isOpened
      ? `${styles.navigation_list_mobile} ${styles.navigation_list_mobile_active}`
      : styles.navigation_list_mobile;
    setMobileNavClasses(mobileNavClasses);
  }, [mobileNavClasses, isOpened]);

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
        <li className={styles.navigation_link_special}>
          <Button fontSize={19} isLink={true} href="#book-an-appointment">
            Book an Appointment
          </Button>
        </li>
      </ul>
      <button
        onClick={() => setIsOpened((p) => !p)}
        className={styles.navigation_menu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={mobileNavClasses}>
        <li>
          <a className={styles.navigation_link_mobile} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navigation_link_mobile} href="#">
            Services
          </a>
        </li>
        <li>
          <a className={styles.navigation_link_mobile} href="#">
            About US
          </a>
        </li>
        <li className={styles.navigation_link_mobile}>
          <a className={styles.navigation_link_mobile} href="#">
            Book an Appointment
          </a>
        </li>
      </ul>
    </nav>
  );
};
