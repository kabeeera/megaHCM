import React from "react";
import { Image, Progress } from "antd";
import styles from "./Summary.module.scss";

const Summary = ({ stats, index }) => {
  const getClassName = () => {
    const classes = [
      styles.summaryCardGreen,
      styles.summaryCardOrange,
      styles.summaryCardRed,
      styles.summaryCardBlue,
    ];
    return classes[index % classes.length];
  };

  return (
    <div className={`${styles.summary_card} ${getClassName()}`}>
      <div className={styles.content}>
        <h6>{stats.title}</h6>
        <h3>{stats.count}</h3>

        <h6>
          <span>
            <Image preview={false} src="/images/trend.png" />
          </span>
          {stats.type}
        </h6>
      </div>
      <div className={styles.stats}>
        <Progress
          type="circle"
          percent={stats.percent}
          size={65}
          strokeColor="#fff"
          strokeWidth={10}
        />
      </div>
    </div>
  );
};

export default Summary;
