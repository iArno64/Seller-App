import { Outlet } from "react-router-dom";
import Header from "../../molecules/Header";
import Menu from "../../molecules/Menu";

// TODO ?? : recup from api
const itemsMenu = [
  { name: "produits", route: "/produits" },
  { name: "Commandes", route: "/commandes" },
  { name: "Rapports", route: "/Rapport" },
  { name: "Offres", route: "/Offres" },
  { name: "Messages", route: "/Messages" },
];

export default function Layout() {
  return (
    <>
      <Header
        title="La Seller"
        caption="Welcome"
        imageUrl="https://seller.recette.mps.corp/staticSz/Resources/Images/logo-marjma-mkp-negatif.svg"
      />
      <Menu itemsMenu={itemsMenu}></Menu>
      <Outlet />
    </>
  );
}
