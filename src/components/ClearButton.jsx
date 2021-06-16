import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './ClearButton.module.css';

function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button 
      type="button" 
      className={styles.clear}
      onClick={handleClearValue}
    >
      C
    </button>
  );
}

export default ClearButton;