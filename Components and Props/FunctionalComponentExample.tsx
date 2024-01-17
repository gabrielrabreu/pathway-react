import React, { useState } from "react";

interface FunctionalComponentProps {
  title: string;
}

const FunctionalComponent: React.FC<FunctionalComponentProps> = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
