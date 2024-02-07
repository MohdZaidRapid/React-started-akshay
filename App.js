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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// JSX =>babel transpile => React.createElement=> ReactElement.JS object=> HTMLElement(render)
