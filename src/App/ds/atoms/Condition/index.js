import { Chip } from "@mui/material";
import { oneOf } from "prop-types";

const labels = {
  new: "Nouveau",
  used: "Occasion",
};

export default function Condition({ value }) {
  return (
    <Chip
      label={labels[String(value)]}
      color="primary"
      variant={value === "used" ? "outlined" : ""}
    />
  );
}

Condition.propTypes = {
  value: oneOf(["new", "used"]),
};
