import React from "react";

import Image, { StaticImageData } from "next/image";
import styles from "./service-item.module.scss";

interface IServiceItem {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const ServiceItem = ({
  imgSrc,
  imgAlt,
  title,
  children,
}: IServiceItem) => {
  return (
    <section className={styles.services_item}>
      <div className={styles.services_item_header}>
        <div className={styles.services_item_icon_wrapper}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            className={styles.services_item_icon}
          />
        </div>
        <h4 className={styles.services_item_heading}>{title}.</h4>
      </div>
      <p className={styles.services_item_body}>{children}</p>
    </section>
  );
};
