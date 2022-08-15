import { FC, useContext } from "react";
import { CartCard } from "./CartCard";
import { CartContext } from "../../context/cart/CartContext";

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((product) => (
        <CartCard key={product.slug + product.size} {...product} editable={editable} />
      ))}
    </>
  );
};
