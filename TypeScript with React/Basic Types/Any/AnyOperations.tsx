import React, { useState } from "react";

const AnyOperations: React.FC = () => {
  // Using 'any' to hold a value of unknown type
  const [data, setData] = useState<any>(null);

  const handleStringData = () => {
    setData("This is a string");
  };

  const handleNumberData = () => {
    setData(42);
  };

  const handleObjectData = () => {
    setData({ message: "This is an object" });
  };

  return (
    <div>
      <h2>Using 'any' Type in React with TypeScript</h2>
      <p>Current Data: {JSON.stringify(data)}</p>
      <button onClick={handleStringData}>Set String Data</button>
      <button onClick={handleNumberData}>Set Number Data</button>
      <button onClick={handleObjectData}>Set Object Data</button>
    </div>
  );
};

export default AnyOperations;
