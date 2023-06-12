import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Outlet, useParams } from "react-router-dom";
import { useProductsApi } from "../../../../../hooks";
import { Condition, Price, ProductImage, ProductLink } from "../../../atoms";

const myColumns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: ProductImage,
    sortable: false,
  },
  {
    field: "name",
    headerName: "Produit",
    renderCell: ProductLink,
    width: 250,
  },
  {
    field: "condition",
    headerName: "Condition",
    width: 150,
    renderCell: Condition,
  },
  {
    field: "price",
    headerName: "Prix (EUR)",
    width: 150,
    renderCell: Price,
  },
  {
    field: "stock",
    headerName: "Stock Dispo",
    width: 45,
  },
];

export default function ProductPage() {
  const { isLoading, products } = useProductsApi();

  const { produitId } = useParams();

  const leftGrid = produitId ? 8 : 12;
  const rightGrid = produitId ? 4 : 0;

  return (
    <>
      <Grid container>
        <Grid item sx={{ height: 750 }} xs={leftGrid}>
          <DataGrid
            loading={isLoading}
            columns={myColumns}
            disableRowSelectionOnClick={true}
            rows={products || []}
          ></DataGrid>
        </Grid>
        <Grid item component="aside" xs={rightGrid}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
