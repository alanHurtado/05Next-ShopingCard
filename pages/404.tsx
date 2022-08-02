import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts/ShopLayout";

const Error404Page = () => {
  return (
    <ShopLayout title="Page not Fund" pageDescription="Página no encontrada">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={150}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos la página solicitada
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Error404Page;
