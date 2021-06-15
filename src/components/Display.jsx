import React from 'react';
import styles from './Display.module.css';

function Display() {
  return (
    <div className={styles.calculatorDisplay}>
      <h1 className={styles.displayNumber}>0</h1>
    </div>
  );
}

export default Display;