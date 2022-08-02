import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    width: 200,
    description: "Muesta si la orden si esta pagada",
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  {
    field: "orden",
    headerName: "Ver orden",
    width: 200,
    sortable: false,
    description: "Muesta si la orden si esta pagada",
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always' color="secondary"> Ver orden </Link>
        </NextLink>
      );
    },
  },
];

const row = [
  { id: 1, paid: true, fullname: "Alan Astorga" },
  { id: 2, paid: false, fullname: "Viridiana Holi" },
  { id: 3, paid: false, fullname: "Juan Magazo" },
  { id: 4, paid: true, fullname: "Karen Salgado" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title={"Historial de ordenes"}
      pageDescription={"Historial de todas las ordenes del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de Ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={row}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
