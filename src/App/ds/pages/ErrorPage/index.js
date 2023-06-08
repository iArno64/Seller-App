import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Pas de bol ! </h1>
      <Typography variant="p">oups la boulette! : </Typography>

      <Typography variant="p">
        <i>{error.statusText || error.message}</i>
      </Typography>

      <Link to="/"> Retour a la maison </Link>
    </div>
  );
}
