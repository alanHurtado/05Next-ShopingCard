import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FC, useMemo, useState } from "react";
import { IProduct } from "../../interfaces/product";

export const ProductCart: FC<IProduct> = ({ slug, images, title, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? `products/${images[1]} ` : `products/${images[0]}`;
  }, [isHovered, images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={productImage}
                alt={title}
                className="fadeIn"
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontWeight={500}>${price}</Typography>
      </Box>
    </Grid>
  );
};
