import { ShopLayout } from "../../components/layouts";
import { Divider, Card, Grid, Typography, Box, Button } from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";

const CartPage = () => {
  return (
    <ShopLayout
      title={"Carrito - 3"}
      pageDescription={"Carrito de compras de la tienda"}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CartList edit />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className="sumary-card">
            <Typography variant="h2">Orden</Typography>
            <Divider sx={{ my: 1 }} /> <OrderSummary />
          </Card>
          {/* Order Sumary */}
          <Box sx={{ mt: 3 }}>
            <Button color="secondary" className="circular-btn" fullWidth>
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
