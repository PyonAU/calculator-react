import React, { useEffect, useState } from "react";

export const NumberContext = React.createContext();

function NumberProvider({ children }) {
  // State
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");

  const [history, setHistory] = useState({
    firstValue: "",
    operatorValue: "",
    secondValue: "",
    calculation: "",
  });
  const [historyArray, setHistoryArray] = useState([]);

  // Destructuring
  const { secondValue, calculation } = history;

  const handleSetDisplayValue = (num) => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };

  const handleSetStoredValue = () => {
    setHistory({ ...history, firstValue: number });
    setStoredNumber(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  const handleBackButton = () => {
    if (number !== "") {
      const deleteNumber = number.slice(0, number.length - 1);
      setNumber(deleteNumber);
    }
  };

  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const calculate = () => {
    let operation;
    let input;

    if (number && storedNumber) {
      input = {
        firstValue: storedNumber,
        operatorValue: functionType,
        secondValue: number
      }
    } else {
      input = {
        firstValue: calculation,
        operatorValue: functionType,
        secondValue: secondValue
      }
    }
    switch (functionType) {
      case "+":
        operation = (a, b) => (Math.round((parseFloat(a) + parseFloat(b)) * 100) / 100);
        break;
      case "-":
        operation = (a, b) => (Math.round((parseFloat(a) - parseFloat(b)) * 1000) / 1000);
        break;
      case "÷":
        operation = (a, b) => (Math.round((parseFloat(a) / parseFloat(b)) * 1000) / 1000);
        break;
      case "x":
        operation = (a, b) => (Math.round((parseFloat(a) * parseFloat(b)) * 1000) / 1000);
        break;
      default:
        break;
    }
    const value = operation(+input.firstValue, +input.secondValue);
    setHistory({ ...input, calculation: value });
    setHistoryArray(hist =>
      hist.length ?
        [...hist, { ...input, calculation: value }] :
        [{ ...input, calculation: value }]);
    setStoredNumber(() => value);
    setNumber("");
  };


  const handleDeleteHistory = () => {
    setHistory({
      firstValue: "",
      operatorValue: "",
      secondValue: "",
      calculation: "",
    });
    setHistoryArray([]);
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        handleSetDisplayValue,
        handleSetStoredValue,
        storedNumber,
        handleSetCalcFunction,
        functionType,
        handleClearValue,
        handleBackButton,
        calculate,
        historyArray,
        handleDeleteHistory
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

export default NumberProvider;
