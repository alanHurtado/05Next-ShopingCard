import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProcutSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";
import { getProductBySlug, getAllProdcutSlugs } from "../../database/dbProduct";
import { IProduct, ICartProduct } from "../../interfaces";
import { useState, useContext } from "react";
import { ISize } from "../../interfaces/cart";
import { CartContext } from "../../context";

interface Props {
  product: IProduct;
}
const ProductPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);
  const [tempCartProduct, settempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });
  const onSelectedSize = (size: ISize) => {
    settempCartProduct({ ...tempCartProduct, size });
  };
  const onUpdateCuantity = (quantity: number) => {
    settempCartProduct({ ...tempCartProduct, quantity });
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) return;
    addProductToCart(tempCartProduct);
    router.push("/cart");
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProcutSlideshow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* Titulos */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>
            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2"> Cantidad </Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                maxValue={product.inStock > 19 ? 19 : product.inStock}
                updateQuantity={onUpdateCuantity}
              />
              <SizeSelector
                selectedSize={tempCartProduct.size}
                sizes={product.sizes}
                onSelectedSize={onSelectedSize}
              />
            </Box>
            {/* Agregar al carrito */}
            {product.inStock === 0 ? (
              <Chip
                label="No hay disponoibles"
                color="error"
                variant="outlined"
              />
            ) : (
              <Button
                onClick={onAddProduct}
                color="secondary"
                className="'circular-btn"
              >
                {tempCartProduct.size
                  ? "Agregar al carrito"
                  : "Seleccione un talla"}
              </Button>
            )}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2"> Descripción </Typography>
              <Typography variant="body2"> {product.description} </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await getAllProdcutSlugs(); // your fetch function here

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { product },
  };
};

export default ProductPage;
