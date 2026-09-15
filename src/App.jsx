import { useState } from "react";

import "./App.css";

import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addToCartHandler = (meal) => {
    setCartItems((previousItems) => {
      const existingCartItemIndex = previousItems.findIndex(
        (item) => item.id === meal.id,
      );

      if (existingCartItemIndex !== -1) {
        const updatedItems = [...previousItems];

        updatedItems[existingCartItemIndex] = {
          ...updatedItems[existingCartItemIndex],
          amount: updatedItems[existingCartItemIndex].amount + meal.amount,
        };

        return updatedItems;
      }

      return [...previousItems, meal];
    });
  };

  // Add exactly one item from inside the cart
  const addSingleItemHandler = (id) => {
    setCartItems((previousItems) => {
      return previousItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }

        return item;
      });
    });
  };

  // Remove exactly one item from inside the cart
  const removeSingleItemHandler = (id) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === id);

      if (!existingItem) {
        return previousItems;
      }

      // If only one remains, remove the entire item
      if (existingItem.amount === 1) {
        return previousItems.filter((item) => item.id !== id);
      }

      // Otherwise decrease quantity by 1
      return previousItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }

        return item;
      });
    });
  };

  const orderHandler = () => {
    setCartItems([]);
    setCartIsShown(false);

    alert("Your order has been placed!");
  };

  const cartItemCount = cartItems.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <div>
      <Header onShowCart={showCartHandler} cartItemCount={cartItemCount} />

      {cartIsShown && (
        <Cart
          items={cartItems}
          onClose={hideCartHandler}
          onOrder={orderHandler}
          onAddItem={addSingleItemHandler}
          onRemoveItem={removeSingleItemHandler}
        />
      )}

      <main>
        <div className="hero-image"></div>

        <MealsSummary />

        <AvailableMeals cartItems={cartItems} onAddToCart={addToCartHandler} />
      </main>
    </div>
  );
}

export default App;
