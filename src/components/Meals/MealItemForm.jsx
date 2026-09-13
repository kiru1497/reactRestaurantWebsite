import { useState } from "react";
import Input from "../UI/Input";
import "./MealItemForm.css";

function MealItemForm(props) {
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = Number(amount);

    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className="meal-item-form" onSubmit={submitHandler}>
      <Input
        id={`amount-${props.id}`}
        label="Amount"
        type="number"
        min="1"
        max="5"
        step="1"
        value={amount}
        onChange={amountChangeHandler}
      />

      {props.addedAmount > 0 && (
        <p className="added-amount">
          Added: <strong>{props.addedAmount}</strong>
        </p>
      )}

      <button type="submit" className="add-button">
        + Add
      </button>
    </form>
  );
}

export default MealItemForm;
