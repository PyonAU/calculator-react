import React from 'react';
import styles from './HistoryDisplay.module.css';

function HistoryDisplay() {
  return (
    <>
      <div className={styles.historyDisplay}>
        <div className={styles.item}>
          <h3 className={styles.calculation}>2 + 3 = <span className={styles.result}>5</span></h3>
        </div>
      </div>
      {/* Delete History */}
      <div className={styles.historyFooter}>
        <i className={`${styles.fas} fas fa-trash-alt`}></i>
      </div>
    </>
  );
};

export default HistoryDisplay;