import React from 'react';
import styles from './NumberButton.module.css';

function NumberButton({ buttonValue }) {
  return (
    <button className={styles.calculatorButton}>
      {buttonValue}
    </button>
  );
}

export default NumberButton;