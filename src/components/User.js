import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api call
    setInterval(() => {
      console.log("sdlsd");
    }, 1000);

    return () => {};
  }, []);

  // async function getUserInfo()
  // {

  // }
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>count = {count}</h1>
      <h1>count = {count2}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Zaid</h2>
      <h2>Contact: TechTinterZaid</h2>
    </div>
  );
};

export default User;
