import { createBrowserRouter } from "react-router-dom";
import { CommandePage, ErrorPage, HomePage, ProductsPage } from "./ds/pages";
import { Layout } from "./ds/templates";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/produits",
        element: <ProductsPage />,
      },
      {
        path: "/commandes",
        element: <CommandePage />,
      },
    ],
  },
]);
