import React, { createContext, useContext } from "react";

// Step 1: Define the context type
interface MyContextType {
  value: string;
}

// Step 2: Create a context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Step 3: Create a provider component
export const MyProvider: React.FC = ({ children }) => {
  const contextValue = { value: "Hello from Type-Safe Context!" };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Step 4: Create a custom hook for type-safe access
export const useMyContext = (): MyContextType => {
  const contextValue = useContext(MyContext);
  if (contextValue === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return contextValue;
};

// Example usage in a component
const ComponentUsingContext: React.FC = () => {
  const { value } = useMyContext();
  return <div>{value}</div>;
};

export default ComponentUsingContext;
