import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './BackButton.module.css';

function BackButton() {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button
      type="button" 
      className={styles.backButton}
      onClick={handleBackButton}
    >
      <i className="fas fa-long-arrow-alt-left"></i>
    </button>
  );
}

export default BackButton;