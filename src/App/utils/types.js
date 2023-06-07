import { shape, string, oneOf } from "prop-types";

export const ProductType = shape({
  condition: oneOf(["new", "used"]),
  imageUrl: string,
  name: string,
});
