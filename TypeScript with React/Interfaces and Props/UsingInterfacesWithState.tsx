import React, { useState } from "react";

// Define an interface for the component's state
interface MyComponentState {
  count: number;
  message: string;
}

// Create a functional component
const UsingInterfacesWithState: React.FC = () => {
  // Initialize the state with the MyComponentState interface
  const [state, setState] = useState<MyComponentState>({
    count: 0,
    message: "Hello, TypeScript!",
  });

  // Function to update the message
  const updateMessage = () => {
    setState({ ...state, message: "Updated Message" });
  };

  // Function to increment the count
  const incrementCount = () => {
    setState({ ...state, count: state.count + 1 });
  };

  return (
    <div>
      <h2>Using Interfaces with State</h2>
      <p>Count: {state.count}</p>
      <p>Message: {state.message}</p>
      <button onClick={updateMessage}>Update Message</button>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default UsingInterfacesWithState;
