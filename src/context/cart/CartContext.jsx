import { createContext, useContext, useEffect, useReducer } from 'react';
import { useAlert } from '../alert/AlertContext';
import cartReducer from './cartReducer';
import {
  ADD_TO_CART,
  CHANGE_QTY,
  REMOVE_FROM_CART,
  TOGGLE_SAVED,
} from './constants';

const CartContext = createContext();
const CartDispatchContext = createContext();

const LOCAL_KEY = 'swapcart';

const INITIAL_STORAGE_DATA = JSON.parse(localStorage.getItem(LOCAL_KEY));

const initialState = {
  cartItems: INITIAL_STORAGE_DATA?.cartItems || [],
};

export function CartProvider({ children }) {
  const [state, defaultDispatch] = useReducer(cartReducer, initialState);
  const { setMessage } = useAlert();

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
  }, [state]);

  const dispatch = function (type, payload) {
    return defaultDispatch({ type, payload });
  };

  const addToCart = function (itemToAdd) {
    const alreadyExist = state.cartItems.some(
      (item) => item.id === itemToAdd.id
    );
    if (!alreadyExist) dispatch(ADD_TO_CART, { ...itemToAdd, qty: 1 });
  };

  const removeFromCart = function (itemId) {
    dispatch(REMOVE_FROM_CART, itemId);
    setMessage('Item removed from cart');
  };

  const changeQty = function (itemId, qty) {
    dispatch(CHANGE_QTY, { itemId, qty });
  };

  const toggleSaved = function (itemId, saved) {
    dispatch(TOGGLE_SAVED, { itemId, saved });
  };

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider
        value={{
          addToCart,
          removeFromCart,
          changeQty,
          toggleSaved,
        }}
      >
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
