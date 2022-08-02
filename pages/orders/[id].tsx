import NextLink from "next/link";
import { ShopLayout } from "../../components/layouts";
import {
  Divider,
  Card,
  Grid,
  Typography,
  Box,
  Button,
  Link,
  Chip,
} from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title={"Resumen de orden"}
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1" margin={2}>
        Oredem: Alan876876
      </Typography>
      <Chip
        sx={{ my: 2 }}
        label="Pedniente de Pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      />
      <Chip
        sx={{ my: 2 }}
        label="Orden Pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className="sumary-card">
            <Typography variant="h2">Resumen(3-Productos)</Typography>
            <Divider sx={{ my: 1 }} />
            <Box display={"flex"} justifyContent="end">
              <NextLink href="/checkout/address" passHref>
                <Link underline="always" color="secondary">
                  Editar
                </Link>
              </NextLink>
            </Box>
            <Typography variant="subtitle1">Dirección de entrega</Typography>
            <Typography>Datos de infromación de entrega</Typography>
            <Typography>Datos de infromación de entrega</Typography>
            <Typography>Datos de infromación de entrega</Typography>
            <Typography>Datos de infromación de entrega</Typography>
            <Divider sx={{ my: 1 }} />
            <Box display={"flex"} justifyContent="end">
              <NextLink href="/cart" passHref>
                <Link underline="always" color="secondary">
                  Editar
                </Link>
              </NextLink>
            </Box>
            <OrderSummary />
          </Card>
          <Box sx={{ mt: 3 }}>
            <h1>Pagar</h1>
            <Chip
              sx={{ my: 2 }}
              label="Orden Pagada"
              variant="outlined"
              color="success"
              icon={<CreditScoreOutlined />}
            />
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
