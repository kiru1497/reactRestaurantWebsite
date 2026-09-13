import "./App.css";

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <div>
      <Header />

      <main>
        <div className="hero-image"></div>

        <MealsSummary />

        <AvailableMeals />
      </main>
    </div>
  );
}

export default App;
