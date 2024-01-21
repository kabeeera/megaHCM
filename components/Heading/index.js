import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ children, className }) => {
  return <div className={`${styles.title} ${className}`}>{children}</div>;
};

export default Heading;
