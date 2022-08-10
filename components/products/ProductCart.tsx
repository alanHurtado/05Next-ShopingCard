import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { FC, useMemo, useState } from "react";
import { IProduct } from "../../interfaces/product";

export const ProductCart: FC<IProduct> = ({
  slug,
  images,
  title,
  price,
  inStock,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setisImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? `/products/${images[1]} ` : `/products/${images[0]}`;
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
        <NextLink href={`/product/${slug}`} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              {inStock === 0 && (
                <Chip
                  color="primary"
                  label="No hay disponible"
                  sx={{
                    position: "absolute",
                    zIndex: 99,
                    top: "10px",
                    left: "10px",
                  }}
                />
              )}
              <CardMedia
                component="img"
                image={productImage}
                alt={title}
                className="fadeIn"
                onLoad={() => setisImageLoaded(true)}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box
        sx={{ mt: 1, display: isImageLoaded ? "block" : "none" }}
        className="fadeIn"
      >
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontWeight={500}>${price}</Typography>
      </Box>
    </Grid>
  );
};
