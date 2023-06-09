import { Outlet } from "react-router-dom";
import Menu from "../../molecules/Menu";

const itemsMenu = [
  { name: "produit", route: "/produits" },
  { name: "Commande", route: "/commandes" },
  { name: "Rapport", route: "/Rapport" },
  { name: "Messages", route: "/Messages" },
];

export default function Layout() {
  return (
    <>
      <Menu itemsMenu={itemsMenu}></Menu>
      <Outlet />
    </>
  );
}
