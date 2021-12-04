import Divider from "components/AppDivider/AppDivider";
import React from "react";
import styles from "./style.module.css";

const NumberedDivider = ({ number, parentClasses}: {number: number, parentClasses?: string}) => {
  return (
    <div className={`${styles.wrapper} ${parentClasses}`}>
      <div className={styles.inline_wrapper}>
        <span className={styles.label}>{number}</span>
        <Divider type="thick" title="Company"  />
      </div>
    </div>
  )
}

export default NumberedDivider;