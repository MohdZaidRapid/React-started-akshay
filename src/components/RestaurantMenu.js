import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=312&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
  };

  //   if (restInfo === null) {
  //     return <Shimmer />;
  //   }

  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Restuarant </h1>
      <h2>Menu</h2>
      <ul>
        <li>Biyani</li>
        <li>Burgers</li>
        <li>Diet Coke </li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
