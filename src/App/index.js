import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import theme from "./theme";
import Menu from "./Components/Menu";

const itemsMenu = [
  { name: "produit", route: "/products" },
  { name: "Commande", route: "/COmmande" },
  { name: "Rapport", route: "/Rapport" },
  { name: "Messages", route: "/Messages" },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="La Seller" caption="Wlcome" />
      <Menu itemsMenu={itemsMenu}></Menu>
      <Button>Kick Me</Button>
    </ThemeProvider>
  );
}
