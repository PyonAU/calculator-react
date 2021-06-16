import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './BackButton.module.css';

function BackButton({ buttonValue }) {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button
      type="button" 
      className={styles.backButton}
      onClick={handleBackButton}
    >
      &#8592;
    </button>
  );
}

export default BackButton;