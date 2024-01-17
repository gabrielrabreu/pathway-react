import React from "react";

// Define a prop interface
interface MyComponentProps {
  name: string;
  age: number;
  email?: string; // Optional prop
}

// Create a functional component
const MyComponent: React.FC<MyComponentProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>MyComponent</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
    </div>
  );
};

export default MyComponent;
