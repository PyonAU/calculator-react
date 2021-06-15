import React from 'react';
import styles from './ClearButton.module.css';

function ClearButton() {
  return (
    <button type="button" className={styles.clear}>
      C
    </button>
  );
}

export default ClearButton;