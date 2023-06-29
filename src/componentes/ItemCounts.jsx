import { useState } from "react";

import React from "react";

export const Contador = () => {
  const [number, setNumber] = useState(0);



  const IncrementNumber = () => {
    if (number < 10) {
      setNumber(number + 1);
    
    }
  };

  const DecrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={DecrementNumber}> - </button>

        <span>{number}</span>
        <button onClick={IncrementNumber}> + </button>
      </div>
    </>
  );
};
