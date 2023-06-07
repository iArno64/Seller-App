import { Chip } from "@mui/material";
import { ProductType } from "../../../utils/types";

const labels = {
  new: "Nouveau",
  used: "Occasion",
};
export default function Condition({ row: { condition } }) {
  return (
    <Chip
      label={labels[String(condition)]}
      color="primary"
      variant={condition === "used" ? "outlined" : ""}
    />
  );
}

Condition.protoTypes = {
  row: ProductType,
};
