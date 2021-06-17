import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './EqualButton.module.css';

function EqualButton() {
  const { calculate } = useContext(NumberContext);
  return (
    <button 
      type="button" 
      className={styles.equalSign}
      onClick={calculate}
    >
      =
    </button>
  );
}

export default EqualButton;