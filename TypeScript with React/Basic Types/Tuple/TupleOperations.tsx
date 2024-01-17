import React, { useState } from "react";

type UserInfo = [string, number, boolean]; // A tuple type for user info: name, age, and isActive

const TupleOperations: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>(["Alice", 30, true]);

  const updateName = (name: string) => {
    setUserInfo([name, userInfo[1], userInfo[2]]);
  };

  const incrementAge = () => {
    setUserInfo([userInfo[0], userInfo[1] + 1, userInfo[2]]);
  };

  const toggleIsActive = () => {
    setUserInfo([userInfo[0], userInfo[1], !userInfo[2]]);
  };

  return (
    <div>
      <h2>Tuple Operations with TypeScript</h2>
      <p>User Info: {userInfo.join(", ")}</p>
      <button onClick={() => updateName("Bob")}>Change Name to Bob</button>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={toggleIsActive}>Toggle Active Status</button>
    </div>
  );
};

export default TupleOperations;
