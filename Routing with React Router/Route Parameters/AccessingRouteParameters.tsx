import React from "react";
import { useParams } from "react-router-dom";

const AccessingRouteParameters: React.FC = () => {
  // Access the route parameters
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Accessing Route Parameters Example</h2>
      <p>Received Route Parameter: {id}</p>
    </div>
  );
};

export default AccessingRouteParameters;
