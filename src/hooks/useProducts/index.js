import { useQuery } from "react-query";
import HttpClient from "../../HttpClient";

export default function useProducts() {
  const queryResponse = useQuery(
    ["myProductsApi"],
    async () => await HttpClient.get("products").json()
  );

  return { ...queryResponse, products: queryResponse.data };
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
