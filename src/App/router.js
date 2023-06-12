import { createBrowserRouter } from "react-router-dom";
import {
  CommandePage,
  HomePage,
  ProductPage,
  ErrorOffresPage,
  ErrorStandardPage,
  OffreDetailPage,
  OffresPage,
} from "./ds/pages";

import { Layout, LayoutSide } from "./ds/templates";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorStandardPage />,
    children: [
      { index: true, key: "home", element: <HomePage /> },
      {
        path: "/commandes",
        key: "home",
        element: <CommandePage />,
      },
    ],
  },
  // // TODO : ???  définir des pages a layout différent sans les rattacher a la page
  {
    path: "/produits",
    element: <LayoutSide />,
    errorElement: <ErrorStandardPage />,
    children: [
      {
        index: true,
        key: "produit",
        element: <ProductPage />,
      },
      // formaterles url avec param ?
      {
        path: "/produits/:id",
        key: "detailProduit",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/offres",
    element: <Layout />,
    errorElement: <ErrorOffresPage />,
    children: [
      { index: true, key: "offres", element: <OffresPage /> },
      {
        key: "offres",
        path: "/offres/:id",
        element: <OffreDetailPage />,
      },
    ],
  },

  // TODO : comment définri un menu dynamique , affichage conditionnel
  // TODO : recuperation d'une Url en fonction d'une clé

  // TODO : definir la page d'erreur plusieurs fois  ?
]);
