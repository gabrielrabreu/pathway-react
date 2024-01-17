import React from "react";

// A utility function that returns a never type
const throwError = (message: string): never => {
  throw new Error(message);
};

// A function using never for exhaustive type checking
const assertUnreachable = (x: never): never => {
  throw new Error("Didn't expect to get here");
};

type Shape = "circle" | "square" | "triangle";

const describeShape = (shape: Shape) => {
  switch (shape) {
    case "circle":
      return "Round shape";
    case "square":
      return "Four equal sides";
    case "triangle":
      return "Three sides";
    default:
      // If a new shape is added to the type and not handled, TypeScript will show an error here
      return assertUnreachable(shape);
  }
};

const NeverOperations: React.FC = () => {
  const [shape, setShape] = React.useState<Shape>("circle");

  return (
    <div>
      <h2>Never Type Operations in TypeScript</h2>
      <p>Description of the shape: {describeShape(shape)}</p>
      <button onClick={() => setShape("square")}>Square</button>
      <button onClick={() => setShape("triangle")}>Triangle</button>
      <button onClick={() => throwError("This is an error!")}>
        Throw Error
      </button>
    </div>
  );
};

export default NeverOperations;
