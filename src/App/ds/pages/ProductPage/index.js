import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProductsApi } from "../../../../hooks";
import { Condition, Price, ProductImage } from "../../atoms";

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

  return (
    <Box sx={{ height: "100%", width: "100%", minHeight: 400, maxHeight: 800 }}>
      <DataGrid
        loading={isLoading}
        columns={myColumns}
        disableRowSelectionOnClick={true}
        rows={products || []}
      ></DataGrid>
    </Box>
  );
}
