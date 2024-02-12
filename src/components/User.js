import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api call
  }, []);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count = {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Zaid</h2>
      <h2>Contact: TechTinterZaid</h2>
    </div>
  );
};

export default User;
