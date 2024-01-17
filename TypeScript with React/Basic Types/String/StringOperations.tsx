import React, { useState } from "react";

const StringOperations: React.FC = () => {
  const [inputString, setInputString] = useState<string>("");
  const [outputString, setOutputString] = useState<string>("");

  const handleConcatenation = () => {
    setOutputString(inputString + " concatenated string");
  };

  const handleToUpper = () => {
    setOutputString(inputString.toUpperCase());
  };

  const handleToLower = () => {
    setOutputString(inputString.toLowerCase());
  };

  const handleInterpolation = () => {
    setOutputString(`Interpolated: ${inputString}`);
  };

  return (
    <div>
      <h2>String Operations with TypeScript</h2>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={handleConcatenation}>Concatenate</button>
      <button onClick={handleToUpper}>To Upper Case</button>
      <button onClick={handleToLower}>To Lower Case</button>
      <button onClick={handleInterpolation}>Interpolate</button>
      <p>Output: {outputString}</p>
    </div>
  );
};

export default StringOperations;
