import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Zaid</h2>
      <h2>Contact: TechTinterZaid</h2>
    </div>
  );
};

export default User;
