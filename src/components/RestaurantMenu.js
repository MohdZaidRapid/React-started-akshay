import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [restInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);
  console.log("resinfo", restInfo);
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) {
    return <Shimmer />;
  }
  // console.log(restInfo?.cards[2].card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2].card?.card?.info;

  // const { itemCards } =
  //   restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(
  //   "croorect",
  //   // restInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
  //   restInfo?.cards[4].groupedCard
  // );

  const categories =
    restInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories  category", categories);

  return (
    <div className="menu  text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* {categories according} */}
      {categories.map((category, index) => {
        // controlled Component
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(MENU_API + resId);
//   const json = await data.json();

//   setResInfo(json?.data);
// };
