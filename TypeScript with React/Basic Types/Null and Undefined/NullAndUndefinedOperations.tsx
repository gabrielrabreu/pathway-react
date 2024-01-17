import React, { useState } from "react";

const NullAndUndefinedOperations: React.FC = () => {
  const [optionalText, setOptionalText] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string } | undefined>();

  const handleSetText = () => {
    setOptionalText("Hello World");
  };

  const handleClearText = () => {
    setOptionalText(null);
  };

  const handleCreateUser = () => {
    setUser({ name: "John Doe" });
  };

  const handleRemoveUser = () => {
    setUser(undefined);
  };

  return (
    <div>
      <h2>Handling Null and Undefined in TypeScript with React</h2>
      <div>
        <p>Optional Text: {optionalText}</p>
        <button onClick={handleSetText}>Set Text</button>
        <button onClick={handleClearText}>Clear Text</button>
      </div>
      <div>
        <p>User: {user ? user.name : "No user"}</p>
        <button onClick={handleCreateUser}>Create User</button>
        <button onClick={handleRemoveUser}>Remove User</button>
      </div>
    </div>
  );
};

export default NullAndUndefinedOperations;
