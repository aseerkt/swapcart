import {
  ADD_TO_CART,
  CHANGE_QTY,
  REMOVE_FROM_CART,
  TOGGLE_SAVED,
} from './constants';

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case CHANGE_QTY:
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.itemId
      );
      if (action.payload.qty !== 0) {
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.itemId
        );
        const itemToChange = state.cartItems[itemIndex];
        itemToChange.qty = action.payload.qty;
        newCartItems.splice(itemIndex, 0, itemToChange);
      }
      return {
        cartItems: newCartItems,
      };
    case TOGGLE_SAVED: {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.itemId
      );
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.itemId
      );
      const itemToChange = state.cartItems[itemIndex];
      itemToChange.saved = !action.payload.saved;
      newCartItems.splice(itemIndex, 0, itemToChange);
      return {
        cartItems: newCartItems,
      };
    }

    default:
      return state;
  }
}
