import React from "react";

import styles from "./services.module.scss";

import growth from "./../../assets/images/growth.png";

import { ServiceItem } from "../service-item/service-item";

export const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.services_header}>WE OFFER</h2>
      <div className={styles.services_content}>
        <ServiceItem
          imgSrc={growth}
          imgAlt="growth icon"
          title="Our Flagship service."
        >
          <>
            We only offer one service as this allow us to really focus on our
            craft and become the best in the industry at it. After all, mastery
            requires a monastic focus. We don’t throw in unnecessary extras just
            to make you feel like it’s your money’s worth.
            <br />
            <br />
            You’ll get more than that with us.
          </>
        </ServiceItem>
        <ServiceItem
          imgSrc={growth}
          imgAlt="growth icon"
          title="Our Flagship service."
        >
          <>
            We only offer one service as this allow us to really focus on our
            craft and become the best in the industry at it. After all, mastery
            requires a monastic focus. We don’t throw in unnecessary extras just
            to make you feel like it’s your money’s worth.
            <br />
            <br />
            You’ll get more than that with us.
          </>
        </ServiceItem>
        <ServiceItem
          imgSrc={growth}
          imgAlt="growth icon"
          title="Our Flagship service."
        >
          <>
            We only offer one service as this allow us to really focus on our
            craft and become the best in the industry at it. After all, mastery
            requires a monastic focus. We don’t throw in unnecessary extras just
            to make you feel like it’s your money’s worth.
            <br />
            <br />
            You’ll get more than that with us.
          </>
        </ServiceItem>
        <ServiceItem
          imgSrc={growth}
          imgAlt="growth icon"
          title="Our Flagship service."
        >
          <>
            We only offer one service as this allow us to really focus on our
            craft and become the best in the industry at it. After all, mastery
            requires a monastic focus. We don’t throw in unnecessary extras just
            to make you feel like it’s your money’s worth.
            <br />
            <br />
            You’ll get more than that with us.
          </>
        </ServiceItem>
      </div>
    </section>
  );
};
