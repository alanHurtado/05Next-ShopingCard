import type { NextPage, GetServerSideProps } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { getProductByTerm, getAllProducts } from "../../database/dbProduct";
import { IProduct } from "../../interfaces/product";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title="Teslo-Shop-SearchPage"
      pageDescription="Pagina para busquedas en la tienda"
    >
      <Typography variant="h1" component="h1">
        Buscar Producto
      </Typography>
      {foundProducts ? (
        <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
          Terminino: {query}
        </Typography>
      ) : (
        <>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Producto no encontrado, pero te mostramos algunas recomendaciones de tu búsqueda
          </Typography>
          <Typography variant="h2" sx={{ mb: 1 }} textTransform='capitalize' color='red'>
            {query}
          </Typography>
        </>
      )}
      <ProductList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = " " } = params as { query: string };
  if (query.length === 0)
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };

  let products = await getProductByTerm(query); // your fetch function here
  let foundProducts = true;
  if (products.length === 0) {
    foundProducts = false;
    products = await getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};
export default SearchPage;
