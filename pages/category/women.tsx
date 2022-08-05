import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoadin } from "../../components/ui";
import { useProducts } from "../../hooks";

const WomenPage: NextPage = () => {
  const { isLoading, products } = useProducts("/products?gender=women");
  return (
    <ShopLayout
      title="Teslo-Shop-Women"
      pageDescription="Pagina de productos para mujer"
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellas
      </Typography>
      {isLoading ? <FullScreenLoadin /> : <ProductList products={products} />}
    </ShopLayout>
  );
};
export default WomenPage;
