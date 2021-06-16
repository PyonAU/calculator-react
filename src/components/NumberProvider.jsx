import React, { useState } from 'react';

export const NumberContext = React.createContext();

function NumberProvider({ children }) {

  // state
  const [ number, setNumber ] = useState('');
  const [ storedNumber, setStoredNumber ] = useState('');
  const [ functionType, setFunctionType ] = useState('');

  const handleSetDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
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
        handleBackButton
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

export default NumberProvider;