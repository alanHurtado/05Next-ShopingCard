import { FC, useContext } from "react";
import { initialData } from "../../database/products";
import { CartCard } from "./CartCard";
import { CartContext } from "../../context/cart/CartContext";

interface Props {
  edit?: boolean;
}

export const CartList: FC<Props> = ({ edit = false }) => {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((product) => (
        <CartCard key={product.slug + product.size} {...product} edit={edit} />
      ))}
    </>
  );
};
