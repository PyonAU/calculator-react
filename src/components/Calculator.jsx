import React, { useState } from 'react';
import Display from './Display';
import FunctionButton from './FunctionButton';
import NumberButton from './NumberButton';
import ClearButton from './ClearButton';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import HistoryDisplay from './HistoryDisplay';
import styles from './Calculator.module.css';

function Calculator() {

  // States
  const [ isClicked, setIsClicked ] = useState(false);
  const [ width, setWidth ] = useState('400px');
  const [ visibility, setVisibility ] = useState('hidden');

  const handleHistory = () => {
    setIsClicked((prevState) => !prevState);
    setWidth(width === '400px' ? '800px' : '400px');
    setVisibility(visibility === 'hidden' ? 'visible' : 'hidden');
  };

  return (
    // Calculator
    <div className={styles.calculator} style={{width}}>
      {/* Wrap Display & Buttons */}
      <div className={styles.wrapper}>
        {/* Display */}
        <Display 
          handleHistory={handleHistory}
        />
        {/* Buttons */}
        <div className={styles.calculatorButtons}>
          <FunctionButton buttonValue="+" />
          <FunctionButton buttonValue="-" />
          <FunctionButton buttonValue="x" />
          <FunctionButton buttonValue="÷" />
          <NumberButton buttonValue="7" />
          <NumberButton buttonValue="8" />
          <NumberButton buttonValue="9" />
          <BackButton />
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
      <div className={styles.wrapper}>
        <HistoryDisplay 
          isClicked={isClicked}
          visibility={visibility}
        />
      </div>
    </div>
  );
}

export default Calculator;