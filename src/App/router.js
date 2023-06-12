import { createBrowserRouter } from "react-router-dom";
import {
  CommandePage,
  HomePage,
  ProductPage,
  ErrorOffresPage,
  ErrorStandardPage,
  OffresPage,
  OffreDetailPage,
  ProductDetailPage,
} from "./ds/pages";

//import { Layout, LayoutSide } from "./ds/templates";
import { Layout } from "./ds/templates";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorStandardPage />,
    children: [
      { index: true, key: "home", element: <HomePage /> },
      {
        key: " ProduitsListing",
        path: "produits",
        element: <ProductPage />,
        errorElement: <ErrorOffresPage />,
        children: [
          {
            key: "produitDetail",
            path: ":produitId",
            element: <ProductDetailPage />,
          },
        ],
      },
    ],
  },
  {
    key: "commandesListing",
    path: "commandes",
    element: <CommandePage />,
  },
  // formaterles url avec param ?
  {
    path: "offres",
    key: "offreListing",
    element: <Layout />,
    children: [
      {
        element: <OffresPage />,
        children: [
          {
            key: "offreDetail",
            path: ":offreId",
            element: <OffreDetailPage />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "offres/:offreId",
  //   key: "detailOffre",
  //   errorElement: ErrorOffresPage,
  //   element: <OffreDetailPage />,
  // },
  // // TODO : ???  définir des pages a layout différent sans les rattacher a la page

  // TODO : comment définri un menu dynamique , affichage conditionnel
  // TODO : recuperation d'une Url en fonction d'une clé

  // TODO : definir la page d'erreur plusieurs fois  ?
]);
