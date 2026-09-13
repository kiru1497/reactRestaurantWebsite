import Card from "../UI/Card";
import "./AvailableMeals.css";

const dummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Fresh Pasta",
    description: "Homemade pasta with rich tomato sauce",
    price: 14.5,
  },
  {
    id: "m6",
    name: "Grilled Chicken",
    description: "Tender chicken with herbs and vegetables",
    price: 19.99,
  },
];

function AvailableMeals() {
  return (
    <section className="available-meals">
      <Card>
        {dummyMeals.map((meal) => (
          <div className="meal-item" key={meal.id}>
            <div className="meal-info">
              <h3>{meal.name}</h3>

              <p className="meal-description">{meal.description}</p>

              <p className="meal-price">${meal.price.toFixed(2)}</p>
            </div>

            <button className="add-button">+ Add</button>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default AvailableMeals;
