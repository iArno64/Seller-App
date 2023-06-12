import { useQuery } from "react-query";
import { HttpClientDomainA } from "../../HttpClient";

export default function useProducts({ produitId } = {}) {
  const baseKey = "myProductsApi";
  // TODO  a mettre ailleurs => recup from routing ?
  const baseUrl = "products";

  console.log(`useProduct${produitId}`);

  const queryKey = produitId ? [baseKey, { produitId }] : [baseKey];
  const productApiUrl = produitId ? `${baseUrl}/${produitId}` : baseUrl;

  const queryResponse = useQuery(
    queryKey,
    async () => await HttpClientDomainA.get(productApiUrl).json()
  );

  const dataReturned = produitId
    ? { product: queryResponse.data }
    : { products: queryResponse.data || [] };

  return { ...queryResponse, ...dataReturned };
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
