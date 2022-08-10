import { CartState } from "./";
import { ICartProduct } from "../../interfaces/cart";
type CartActionType =
  | { type: "Cart-LoadCart from cookis | storage"; payload: ICartProduct[] }
  | { type: "Cart-Update-Products-In-Cart"; payload: ICartProduct[] }
  | { type: "Cart-Change-cart-quantity"; payload: ICartProduct }
  | { type: "[Cart] - Remove product in cart"; payload: ICartProduct }
  | {
      type: "[Cart] - Update order summary";
      payload: {
        numberOfItems: number;
        subTotal: number;
        tax: number;
        total: number;
      };
    };

export const cartReduccer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "Cart-LoadCart from cookis | storage":
      return {
        ...state,
        cart: action.payload,
      };
    case "Cart-Update-Products-In-Cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Cart-Change-cart-quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;
          product.quantity = action.payload.quantity;
          return action.payload;
        }),
      };
    case "[Cart] - Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter(
          (product) =>
            !(
              product._id === action.payload._id &&
              product.size === action.payload.size
            )
        ),
      };
    case "[Cart] - Update order summary":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
