import React, { useState } from "react";

const ArrayOperations: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  const removeNumber = () => {
    setNumbers(numbers.slice(0, -1));
  };

  const doubleNumbers = () => {
    setNumbers(numbers.map((number: number) => number * 2));
  };

  const filterEvenNumbers = () => {
    setNumbers(numbers.filter((number: number) => number % 2 === 0));
  };

  return (
    <div>
      <h2>Array Operations with TypeScript</h2>
      <p>Current Numbers: {numbers.join(", ")}</p>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={removeNumber}>Remove Last Number</button>
      <button onClick={doubleNumbers}>Double Numbers</button>
      <button onClick={filterEvenNumbers}>Filter Even Numbers</button>
    </div>
  );
};

export default ArrayOperations;
