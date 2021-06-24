import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";
import styles from "./HistoryDisplay.module.css";

function HistoryDisplay({ isClicked, visibility }) {
  const { historyArray, handleDeleteHistory } = useContext(NumberContext);

  return (
    <>
      <div className={styles.historyDisplay} hidden={!isClicked}>
        {historyArray.map(
          ({ firstValue, operatorValue, secondValue, calculation }, i) => {
            return <div className={styles.item} key={i}>
                <h5 className={styles.calculation}>
                  {`${firstValue} ${operatorValue} ${secondValue}  = `}
                  <span className={styles.result}>{calculation}</span>
                </h5>
              </div>
          }
        )}
      </div>
      {/* Delete History */}
      <div className={styles.historyFooter}>
        <i
          className={`${styles.fas} fas fa-trash-alt`}
          onClick={handleDeleteHistory}
          style={{ visibility }}
        ></i>
      </div>
    </>
  );
}

export default HistoryDisplay;
