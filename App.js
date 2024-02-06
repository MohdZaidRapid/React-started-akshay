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

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React Element =object=> when we render this element to dom it becomes a html element

const heading = React.createElement("h1", { id: "heading" }, "Zaid React 🚀");

// JSX is not Html in JS  -->html like syntax
// jsx code transpile by jsx engine before going to js engine
// JSX (tanspile before it reaches the js)-PARCEL - Babel

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    React start here 🚀
  </h1>
);

// React Functional Component
// Class based component - OLD
// Functional component  - NEW
const HeadingComponent = () => {
  
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

// JSX =>babel transpile => React.createElement=> ReactElement.JS object=> HTMLElement(render)
