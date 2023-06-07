import Header from "../../molecules/Header";
import Menu from "../../molecules/Menu";

const itemsMenu = [
  { name: "produit", route: "/products" },
  { name: "Commande", route: "/COmmande" },
  { name: "Rapport", route: "/Rapport" },
  { name: "Messages", route: "/Messages" },
];

export default function Layout() {
  return (
    <>
      <Header title="La Seller" caption="Wlcome" />
      <Menu itemsMenu={itemsMenu}></Menu>
    </>
  );
}
