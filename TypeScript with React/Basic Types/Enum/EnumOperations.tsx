import React, { useState } from "react";

enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

const EnumOperations: React.FC = () => {
  const [status, setStatus] = useState<UserStatus>(UserStatus.Active);

  const toggleStatus = () => {
    if (status === UserStatus.Active) {
      setStatus(UserStatus.Inactive);
    } else {
      setStatus(UserStatus.Active);
    }
  };

  return (
    <div>
      <h2>Enum Operations with TypeScript in React</h2>
      <p>Current User Status: {status}</p>
      <button onClick={toggleStatus}>Toggle Status</button>

      {status === UserStatus.Active && <p>The user is currently active.</p>}
      {status === UserStatus.Inactive && <p>The user is currently inactive.</p>}
    </div>
  );
};

export default EnumOperations;
