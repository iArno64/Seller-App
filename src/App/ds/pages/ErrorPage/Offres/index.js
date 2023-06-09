import { Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorOffresPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Pas de bol les Offres! </h1>
      <Typography variant="p">oups OFFRE boulette! : </Typography>
      <div>
        <Typography variant="p">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </div>
      <Link to="/"> Rentre chez toi </Link>
    </div>
  );
}
