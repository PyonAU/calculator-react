import React from 'react';
import styles from './EqualButton.module.css';

function EqualButton() {
  return (
    <button type="button" className={styles.equalSign}>
      =
    </button>
  );
}

export default EqualButton;