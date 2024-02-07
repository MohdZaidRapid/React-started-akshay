// /*

// <div id="parent">
// <div>
// <h1>
// hi am h1 tag
// </h1>
// </div>

// </div>
// */

// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement(
// //     "div",
// //     { id: "child" },
// //     React.createElement("h1", {}, "I'm an h1 tag")
// //   )
// // );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading", xyz: "abc" },
// //   "Hello World from react"
// // );
// // id:attribute ex <h1 id="heading" xyz="abc">Hello World</h1>

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "this is real react"),
//     React.createElement("h2", {}, "slkdlskdlksldkk"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);
// // best
// console.log(parent); //object

// // JSX
// // JSX

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// React Element =object=> when we render this element to dom it becomes a html element

// const heading = React.createElement("h1", { id: "heading" }, "Zaid React 🚀");

// const Title = function () {
//   return (
//     <h1 className="heading1" tabIndex="5">
//       master react
//     </h1>
//   );
// };

// JSX is not Html in JS  -->html like syntax
// jsx code transpile by jsx engine before going to js engine
// JSX (tanspile before it reaches the js)-PARCEL - Babel

// React Element
// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     React start here 🚀
//   </h1>
// );

// const elem = <span>React Element</span>;

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     {elem}
//     Like reactjs
//     {/* <HeadingComponent /> */}
//   </h1>
// );

// const HeadingComponent = () => (
//   // return jsx
//   <div id="container">
//     {/* <Title /> */}
//     {/* you can write any js code in  jsx {} */}
//     <Title />
//     {/* <h1>{100 * 200}</h1>
//     <h1>{console.log(number)}</h1> */}
//     {Title()}
//     <h1 className="heading">React Functional Component </h1>
//   </div>
// );

// const number = 1000;

// component composition component inside component

// component composition

// const HeadingComponent = () => {
//   return <h1 className="heading">React Functional Component </h1>;
// };
// return jsx

// const fn = () => true;
// React Functional Component
// Class based component - OLD

// Functional component  - NEW

import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *    - Search
 *    - Carts
 *    - RestaurantContainer
 *      - ReastuarantCard
 *        - Img
 *        - Name of Res  ,Start Rating,cuisine,,delivery cart,etc
 *    - RestaurantCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Addrress
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png"
          alt="App Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#0f0f0f",
// };

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla?.deliveryTime}</h4>
    </div>
  );
};

const resObj = {
  type: "restaurant",
  info: {
    id: "413481",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "HAL 2nd Stage",
    areaName: "Indiranagar",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.1,
    parentId: "61955",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-02-08 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "EVERY ITEM",
      subHeader: "@ ₹149",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {
    context: "seo-data-2e54ff95-b702-440a-91f7-8c421898e9c5",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/chinese-wok-hal-2nd-stage-indiranagar-bangalore-413481",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// JSX =>babel transpile => React.createElement=> ReactElement.JS object=> HTMLElement(render)
