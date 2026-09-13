import MealItemForm from "./MealItemForm";
import "./MealItem.css";

function MealItem(props) {
  const addToCartHandler = (amount) => {
    props.onAddToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <div className="meal-item">
      <div className="meal-info">
        <h3>{props.name}</h3>

        <p className="meal-description">{props.description}</p>

        <p className="meal-price">${props.price.toFixed(2)}</p>
      </div>

      <MealItemForm
        id={props.id}
        onAddToCart={addToCartHandler}
        addedAmount={props.addedAmount}
      />
    </div>
  );
}

export default MealItem;
