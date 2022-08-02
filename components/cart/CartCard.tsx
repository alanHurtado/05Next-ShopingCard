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
import { FC } from "react";
import { IProduct } from "../../interfaces";
import { ItemCounter } from "../ui";

interface Props extends IProduct {
  edit: Boolean;
}
export const CartCard: FC<Props> = ({ price, title, images, edit }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 1 }}>
      <Grid item xs={3}>
        {/* LLEvar a la página del producto */}
        <NextLink href="/product/slug" passHref>
          <Link typography="h4" color="secondary">
            {" "}
            <CardActionArea>
              <CardMedia
                image={`/products/${images[0]}`}
                component="img"
                sx={{ borderRadius: "5px" }}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Grid>
      <Grid item xs={7}>
        <Box display="flex" flexDirection="column">
          <Typography variant="body1"> {title}</Typography>
          <Typography variant="body1">
            Talla: <strong> M</strong>
          </Typography>
          {edit ? <ItemCounter /> : <Typography variant="body1">3</Typography>}
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="subtitle1">{`$${price}`}</Typography>
        {edit && (
          <Button variant="text" color="secondary">
            Remover
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
