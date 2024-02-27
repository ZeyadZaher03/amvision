import React from "react";

import styles from "./button.module.css";

interface IButton {
  isLink?: boolean;
  children: string | JSX.Element | JSX.Element[];
  href?: string;
}

export const Button = ({ isLink, children, href }: IButton) => {
  if (isLink) {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }
  return <button className={styles.button}>{children}</button>;
};
