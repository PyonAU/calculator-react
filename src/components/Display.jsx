import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import styles from "./Display.module.css";

function Display({ handleHistory }) {
  const { number, storedNumber, result } = useContext(NumberContext);


  return (
    <div className={styles.calculatorDisplay}>

      <div className={styles.history}>
        <i
          className={`${styles.fas} fas fa-history`}
          onClick={handleHistory}
        ></i>
      </div>

      <h1 className={styles.displayNumber}>
        {!number.length && !storedNumber ? "0" : number || storedNumber || result}
      </h1>
    </div>
  );
}

export default Display;
