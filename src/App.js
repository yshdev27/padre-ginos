import React from "react";
import { createRoot } from "react-dom/client";
import Pizzas from "./Pizza.jsx";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizzas, {
      name: "Margherita",
      description: "Classic pizza with tomatoes, mozzarella, and basil.",
    }),
    React.createElement(Pizzas, {
      name: "Pepperoni",
      description: "Topped with pepperoni slices and cheese.",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
