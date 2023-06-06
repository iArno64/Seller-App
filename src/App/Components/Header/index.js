import { Typography, AppBar, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1">
          SELLER WORLD
        </Typography>
        <Typography
          sx={{
            paddingLeft: 5,
          }}
        >
          Welcome a la Seller
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
