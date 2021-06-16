import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './FunctionButton.module.css';

function FunctionButton({ buttonValue }) {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button 
      type="button"
      className={styles.operator}
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}

export default FunctionButton;