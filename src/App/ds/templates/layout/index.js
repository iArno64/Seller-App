import { Outlet } from "react-router-dom";
import Header from "../../molecules/Header";
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
