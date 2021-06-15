import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';
import './App.module.css';

function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
