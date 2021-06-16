import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './NumberButton.module.css';

function NumberButton({ buttonValue }) {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button 
      className={styles.calculatorButton}
      onClick={() => handleSetDisplayValue(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}

export default NumberButton;