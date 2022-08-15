import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { FC, useContext, useState } from "react";
import { ICartProduct } from "../../interfaces";
import { ItemCounter } from "../ui";
import { CartContext } from "../../context";

interface Props extends ICartProduct {
  editable: Boolean;
}
export const CartCard: FC<Props> = (product) => {
  const { updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onNewCartQuantity = (
    productInCart: ICartProduct,
    newQuantityValue: number
  ) => {
    const newProductInCart = {
      ...productInCart,
      quantity: newQuantityValue,
    };

    updateCartQuantity(newProductInCart);
  };
  return (
    <Grid container spacing={2} sx={{ mb: 1 }}>
      <Grid item xs={3}>
        {/* LLEvar a la página del producto */}
        <NextLink href={`/product/${product.slug}`} passHref>
          <Link typography="h4" color="secondary">
            <CardActionArea>
              <CardMedia
                image={`/products/${product.image}`}
                component="img"
                sx={{ borderRadius: "5px" }}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Grid>
      <Grid item xs={7}>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1"> {product.title}</Typography>
          <Typography variant="body1">
            Talla: <strong> {product.size}</strong>
          </Typography>
          {product.editable ? (
            <ItemCounter
              currentValue={product.quantity}
              maxValue={20}
              updateQuantity={(value) => onNewCartQuantity(product, value)}
            />
          ) : (
            <Typography variant="body1">
              {product.quantity} producto{product.quantity > 1 && "s"}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="subtitle1">{`$${product.price}`}</Typography>
        {product.editable && (
          <Button
            onClick={() => removeCartProduct(product)}
            variant="text"
            color="secondary"
          >
            Remover
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
