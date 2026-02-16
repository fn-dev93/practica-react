import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

function CartItem({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - <span>${price}</span>
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              addToCart={() => addToCart(item)}
              {...item}
            />
          ))}
        </ul>

        <button className="clear-cart" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
