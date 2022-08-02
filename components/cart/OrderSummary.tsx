import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>N° Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifySelf="end">
        <Typography>3 </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifySelf="end">
        <Typography>$23432.234 </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifySelf="end">
        <Typography>${234 * 0.15} </Typography>
      </Grid>
      <Grid item xs={6} sx={{mt:2}}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifySelf="end">
        <Typography variant="subtitle1" sx={{mt:2}}>${234 * 0.15 + 234} </Typography>
      </Grid>
    </Grid>
  );
};
