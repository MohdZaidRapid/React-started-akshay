import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;

  // Normal js variable
  // let listOfRestaurants = null;

  // Normal variable
  // let listOfRestaurantsJS = [
  //   {
  //     data: {
  //       id: "121602",
  //       name: "Kannur Food Point",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121603",
  //       name: "Dominos",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121604",
  //       name: "MCD",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // useEffect called after the  component render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.forEach(
    //     (card) => {
    //       console.log(card.info.id);
    //     }
    //   )
    // );
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here

            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
