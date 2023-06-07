import { DataGrid } from "@mui/x-data-grid";
import { Condition } from "../../atoms/Condition";
import { Price } from "../../atoms/Price";
import { ProductImage } from "../../atoms/ProductImage";

const rows = [{}];

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
    describe: "",
    width: 45,
  },
];

export default function ProductPage() {
  return <DataGrid columns={myColumns} rows={rows}></DataGrid>;
}
