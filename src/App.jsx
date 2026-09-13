import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <main>
        <div className="hero-image"></div>

        <MealsSummary />
      </main>
    </div>
  );
}

export default App;
