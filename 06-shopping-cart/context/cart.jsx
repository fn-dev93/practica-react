import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCart = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (productInCart >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCart].quantity += 1;
        return newCart;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_FROM_CART": {
      const productInCart = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (productInCart >= 0) {
        const newCart = structuredClone(state);
        if (newCart[productInCart].quantity > 1) {
          newCart[productInCart].quantity -= 1;
          return newCart;
        }
        newCart.splice(productInCart, 1);
        return newCart;
      }
      return state;
    }

    case "CLEAR_CART": {
      return initialState;
    }
  }

  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFomCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFomCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
