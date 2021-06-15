import React from 'react';
import styles from './FunctionButton.module.css';

function FunctionButton({ buttonValue }) {
  return (
    <button className={styles.operator}>
      {buttonValue}
    </button>
  );
}

export default FunctionButton;