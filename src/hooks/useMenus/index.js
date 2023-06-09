import { useQuery } from "react-query";
import { HttpClientDomainA } from "../../HttpClient";

export default function useMenus() {
  const queryResponse = useQuery(
    ["myMenuApi"],
    async () => await HttpClientDomainA.get("menus").json()
  );

  return { ...queryResponse, menus: queryResponse.data };
}

// export default function useProducts() {
//   const [products, setProducts] = React.useState([]);

//   React.useEffect(() => {
//     try {
//       const fetchProductFunc = async () => {
//         const response = await fetch("http://localhost:3004/products");
//         const productResponse = await response.json();
//         setProducts(productResponse);
//       };
//       fetchProductFunc();
//     } catch (error) {
//       console.error(error);
//     }
//   }, [setProducts]);

//   return products;
// }
