import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoadin } from "../../components/ui";
import { useProducts } from "../../hooks";

const MenPage: NextPage = () => {
  const { isLoading, products } = useProducts("/products?gender=men");
  return (
    <ShopLayout
      title="Teslo-Shop-MenPage"
      pageDescription="Pagina de Productos Para Hombre tesla Shop"
    >
      <Typography variant="h1" component="h1">
      Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para ellos
      </Typography>
      {isLoading ? <FullScreenLoadin /> : <ProductList products={products} />}
    </ShopLayout>
  );
};
export default MenPage;
