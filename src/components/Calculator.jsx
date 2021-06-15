import React from 'react';
import Display from './Display';
import FunctionButton from './FunctionButton';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import styles from './Calculator.module.css';

function Calculator() {


  return (
    // Calculator
    <div className={styles.calculator}>
      {/* Wrap Display & Buttons */}
      <div className={styles.wrapper}>
        {/* Display */}
        <Display />
        {/* Buttons */}
        <div className={styles.calculatorButtons}>
          <FunctionButton buttonValue="+" />
          <FunctionButton buttonValue="-" />
          <FunctionButton buttonValue="*" />
          <FunctionButton buttonValue="/" />
          <NumberButton buttonValue="7" />
          <NumberButton buttonValue="8" />
          <NumberButton buttonValue="9" />
          <NumberButton buttonValue="4" />
          <NumberButton buttonValue="5" />
          <NumberButton buttonValue="6" />
          <NumberButton buttonValue="1" />
          <NumberButton buttonValue="2" />
          <NumberButton buttonValue="3" />
          <NumberButton buttonValue="." />
          <NumberButton buttonValue="0" />
          <ClearButton />
          <EqualButton />
        </div>
      </div>
    </div>
  );
}

export default Calculator;