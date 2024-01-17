import React, { useState } from "react";

const NumberOperations: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const handleAddition = () => setNumber(number + 1);
  const handleSubtraction = () => setNumber(number - 1);
  const handleMultiplication = () => setNumber(number * 2);
  const handleDivision = () => setNumber(number / 2);

  return (
    <div>
      <h2>Number Operations with TypeScript</h2>
      <p>Current Number: {number}</p>
      <button onClick={handleAddition}>Add 1</button>
      <button onClick={handleSubtraction}>Subtract 1</button>
      <button onClick={handleMultiplication}>Multiply by 2</button>
      <button onClick={handleDivision}>Divide by 2</button>
    </div>
  );
};

export default NumberOperations;
