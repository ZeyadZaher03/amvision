import React from "react";
import Image from "next/image";

import amvision_logo from "@/assets/images/amvision.png";
import fb_logo from "@/assets/images/socal_media/fb.png";
import ig_logo from "@/assets/images/socal_media/ig.png";
import x_logo from "@/assets/images/socal_media/x.png";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_logo_container}>
        <Image
          className={styles.footer_logo}
          src={amvision_logo}
          alt="amvision logo"
        />
        <span className={styles.footer_logo_text}>AM VISION</span>
      </div>
      <div className={styles.footer_lists_container}>
        <ul className={styles.footer_list}>
          <li>
            <a href="#" className={styles.footer_list_item}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_list_item}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_list_item}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_list_item}>
              Schedule An Appointment
            </a>
          </li>
        </ul>
        <div className={styles.footer_list}>
          <li>
            <a href="#" className={styles.footer_list_item}>
              contact@amvision.com
            </a>
          </li>
          <li>
            <a href="#" className={styles.footer_list_item}>
              +20 10244568795
            </a>
          </li>
        </div>
      </div>
      <div className={styles.footer_social_media}>
        <ul className={styles.footer_social_media_list}>
          <li>
            <a className={styles.footer_social_media_item} href="#">
              <Image
                className={styles.footer_social_media_img}
                src={fb_logo}
                alt="Facebook link"
              />
            </a>
          </li>
          <li>
            <a className={styles.footer_social_media_item} href="#">
              <Image
                className={styles.footer_social_media_img}
                src={x_logo}
                alt="X/ link"
              />
            </a>
          </li>
          <li>
            <a className={styles.footer_social_media_item} href="#">
              <Image
                className={styles.footer_social_media_img}
                src={ig_logo}
                alt="Instagram link"
              />
            </a>
          </li>
        </ul>
      </div>
      <span className={styles.copyright}>
        &copy; 2024 amvision, Allright are reserved
      </span>
    </footer>
  );
};
