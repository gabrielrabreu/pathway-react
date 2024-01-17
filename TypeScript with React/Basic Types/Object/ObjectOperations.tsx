import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const initialUser: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
};

const ObjectOperations: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser);

  const updateName = (newName: string) => {
    setUser({ ...user, name: newName });
  };

  const updateEmail = (newEmail: string) => {
    setUser({ ...user, email: newEmail });
  };

  return (
    <div>
      <h2>Object Operations with TypeScript in React</h2>
      <p>User ID: {user.id}</p>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>
      <button onClick={() => updateName("Jane Smith")}>
        Change Name to Jane Smith
      </button>
      <button onClick={() => updateEmail("janesmith@example.com")}>
        Change Email
      </button>
    </div>
  );
};

export default ObjectOperations;
