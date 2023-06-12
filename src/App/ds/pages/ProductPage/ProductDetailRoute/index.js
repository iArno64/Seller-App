import { ArrowBack } from "@mui/icons-material";
import { CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import { Image } from "mui-image";
import { Link, useParams } from "react-router-dom";
import { useProductsApi } from "../../../../../hooks";

export default function ProductDetailRoute() {
  const { produitId } = useParams();
  const { isLoading, product } = useProductsApi({ produitId });

  if (isLoading) return <CircularProgress />;

  const { name, imageUrl } = product;

  return (
    <>
      <Stack direction="row" spacing={2}>
        <IconButton component={Link} to="/produits">
          <ArrowBack />
        </IconButton>
        <Typography variant="h4">{name}</Typography>
      </Stack>
      <Image src={imageUrl} alt={name} width={400} duration={250} />
    </>
  );
}
