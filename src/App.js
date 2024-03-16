import React, { useState } from 'react';
import '../src/App.css';

function App() {

   const [stack, setStack] = useState([]);

  const handlePush = () => {
    const newValue = parseInt(prompt("Enter a new value:"));
    setStack(prevStack => [...prevStack, newValue]);
  };

  const handlePop = () => {
    setStack(prevStack => {
      const newStack = new Array();
      for (let i = 0; i < prevStack.length - 1; i++) {
        newStack[i] = prevStack[i];
      }
      return newStack;
    });
  };

  return (
    <div className='body'>
      <div className='header'>
          <h2>Stack</h2>
      </div>

    <div className='buttons'>
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
    </div>
    <div>
      {stack.map((value, index) => (
        <div className='container'>
          <div className='output' key={index}>{value}</div>
       </div>
        
      ))}
    </div>
  </div>
);
}

export default App;
