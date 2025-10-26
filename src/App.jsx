import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order now</h1>
      <Pizza
        name="Margherita"
        description="Classic pizza with tomatoes, mozzarella, and basil."
      />
      <Pizza
        name="Pepperoni"
        description="Topped with pepperoni slices and cheese."
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
