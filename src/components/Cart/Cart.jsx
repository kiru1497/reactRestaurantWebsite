import Modal from "../UI/Modal";
import "./Cart.css";

function Cart(props) {
  const totalAmount = props.items.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <div className="cart-header">
          <h2>Your Cart</h2>

          <button
            className="cart-close-button"
            onClick={props.onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {props.items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>

            <button className="cart-button-secondary" onClick={props.onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {props.items.map((item) => {
                const itemTotal = item.price * item.amount;

                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>

                      <p>
                        {item.amount} × ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <p className="cart-item-total">${itemTotal.toFixed(2)}</p>
                  </div>
                );
              })}
            </div>

            <div className="cart-total">
              <span>Total</span>

              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="cart-actions">
              <button className="cart-button-secondary" onClick={props.onClose}>
                Close
              </button>

              <button className="cart-button-primary" onClick={props.onOrder}>
                Order
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
