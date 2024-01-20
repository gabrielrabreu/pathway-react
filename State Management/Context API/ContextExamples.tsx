import React, { createContext, useContext } from "react";

// Step 1: Create a context
const MyContext = createContext<string>("default-value");

// Step 2: Create a provider component
export const MyProvider: React.FC = ({ children }) => {
  const value = "Hello from Context!";
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Step 3: Create a consumer hook
export const useMyContext = () => {
  const contextValue = useContext(MyContext);
  return contextValue;
};

// Example usage in a component
const ComponentUsingContext: React.FC = () => {
  const contextValue = useMyContext();
  return <div>{contextValue}</div>;
};

export default ComponentUsingContext;
