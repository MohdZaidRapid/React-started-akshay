import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // let btnName = "Login";

  const [btnNameReact, setbtnNameReact] = useState("Login");

  // use Effect called after render of every component
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
