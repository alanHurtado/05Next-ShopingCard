import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { FullScreenLoadin } from "../components/ui";
import { useProducts } from "../hooks";

const HomePage: NextPage = () => {
  const { isLoading, products } = useProducts("/products");
  return (
    <ShopLayout
      title="Teslo-Shop-HomePage"
      pageDescription="Pagina de inicio de tesla Shop"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      {isLoading ? <FullScreenLoadin /> : <ProductList products={products} />}
    </ShopLayout>
  );
};
export default HomePage;
