import { createBrowserRouter } from "react-router-dom";

import Commandepage from "./ds/pages/CommandePage";
import ErrorPage from "./ds/pages/ErrorPage";
import ProductPage from "./ds/pages/ProductPage";
import { Layout } from "./ds/templates";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <ProductPage /> },
      {
        path: "commande",
        element: <Commandepage></Commandepage>,
      },
    ],
  },
]);
