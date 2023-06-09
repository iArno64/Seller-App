import { useQuery } from "react-query";
import { HttpClientDomainA } from "../../HttpClient";

export default function useSalesChannels() {
  const queryResponse = useQuery(
    ["mySalesChannelsApi"],
    async () => await HttpClientDomainA.get("saleChannels").json()
  );

  return { ...queryResponse, salesChannels: queryResponse.data };
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
