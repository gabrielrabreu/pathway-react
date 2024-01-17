import React from "react";

const BooleanOperations: React.FC = () => {
  const valueA: number = 10;
  const valueB: number = 20;

  // Comparison Operators
  const isEqual = valueA === valueB;
  const isNotEqual = valueA !== valueB;
  const isGreater = valueA > valueB;
  const isLess = valueA < valueB;
  const isGreaterOrEqual = valueA >= valueB;
  const isLessOrEqual = valueA <= valueB;

  // Logical Operators
  const andOperation = valueA < 15 && valueB > 15; // true if both conditions are true
  const orOperation = valueA < 15 || valueB > 25; // true if at least one condition is true
  const notOperation = !isEqual; // true if isEqual is false

  return (
    <div>
      <h3>Boolean Operations</h3>
      <p>isEqual: {isEqual.toString()}</p>
      <p>isNotEqual: {isNotEqual.toString()}</p>
      <p>isGreater: {isGreater.toString()}</p>
      <p>isLess: {isLess.toString()}</p>
      <p>isGreaterOrEqual: {isGreaterOrEqual.toString()}</p>
      <p>isLessOrEqual: {isLessOrEqual.toString()}</p>
      <p>AND Operation: {andOperation.toString()}</p>
      <p>OR Operation: {orOperation.toString()}</p>
      <p>NOT Operation: {notOperation.toString()}</p>
    </div>
  );
};

export default BooleanOperations;
