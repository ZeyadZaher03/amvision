import React from "react";

import styles from "./button.module.css";

interface IButton {
  isLink?: boolean;
  children: string | JSX.Element | JSX.Element[];
  href?: string;
  fontSize?: number;
}

export const Button = ({ isLink, children, href, fontSize }: IButton) => {
  const customStyles = {
    fontSize: fontSize ? `${fontSize / 16}rem` : "auto",
  };
  if (isLink) {
    return (
      <a style={customStyles} href={href} className={styles.button}>
        {children}
      </a>
    );
  }
  return (
    <button style={customStyles} className={styles.button}>
      {children}
    </button>
  );
};
