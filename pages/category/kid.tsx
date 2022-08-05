import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoadin } from "../../components/ui";
import { useProducts } from "../../hooks";

const KidPage: NextPage = () => {
  const { isLoading, products } = useProducts("/products?gender=kid");
  return (
    <ShopLayout
      title="Teslo-Shop-KidPage"
      pageDescription="Pagina de inicio de tesla Shop"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>
      {isLoading ? <FullScreenLoadin /> : <ProductList products={products} />}
    </ShopLayout>
  );
};
export default KidPage;
