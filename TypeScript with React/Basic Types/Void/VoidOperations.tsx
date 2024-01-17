import React, { useEffect } from "react";

const VoidOperations: React.FC = () => {
  useEffect(() => {
    console.log("Component mounted");
    // This is a void function since it doesn't return anything
  }, []);

  const handleClick = (): void => {
    console.log("Button clicked");
    // Void indicates that this event handler doesn't return anything
  };

  return (
    <div>
      <h2>Void Type Operations in React with TypeScript</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default VoidOperations;
