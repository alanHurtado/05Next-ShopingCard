import { FC } from "react";
import { initialData } from "../../database/products";
import { CartCard } from "./CartCard";

interface Props {
  edit?: boolean;
}
const productInCart = [
  initialData.products[0],
  initialData.products[3],
  initialData.products[2],
  initialData.products[7],
];
export const CartList: FC<Props> = ({ edit = false }) => {
  return (
    <>
      {productInCart.map((product) => (
        <CartCard key={product.slug} {...product} edit={edit} />
      ))}
    </>
  );
};
