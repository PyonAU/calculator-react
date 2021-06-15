import React from 'react';

export const NumberContext = React.createContext();

function NumberProvider({ children }) {
  return (
    <NumberContext.Provider>
      {children}
    </NumberContext.Provider>
  );
}

export default NumberProvider;