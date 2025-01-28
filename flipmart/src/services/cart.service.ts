import { AxiosRequestConfig } from "axios";
import { provideData } from "../utils/provideData";
import { generateMetadata } from "@/utils/getMetadata";
import { fetchIndividualProduct } from "./products.service";


//   my code
// /* for cart details */
// export const fetchCartDetails = async () => {
//   const url = "https://fakestoreapi.com/carts/1";

//   let total = 0;
//   let data: item[] = [];
//   let error = undefined;
//   const res = (await provideData(url));
//   if (res.error)
//   {
//     return { data, error };
//   }
//   const cartItems: cart = res.data;

//   cartItems.products.forEach(async ({ productId, quantity }) => {
//     const res = await fetchIndividualProduct(productId);
//     if (res.error)
//     {
//       return { data, error };
//     }

//     const productDetails: item = res.data;
//     data = [...data, productDetails];
//     console.log("here is data", data);
//     total = total + (quantity * productDetails.price);
//   });

//   return { data, error };
// }


/* for cart details */
export const fetchCartDetails = async () => {
  const url = "https://fakestoreapi.com/carts/1";
  let data: item[] = [];
  let error = undefined;
  const config: AxiosRequestConfig = {
    url: url,
    method: 'get'
  };
    
  const res =  await provideData(config);
  if (res.error) {
    return { data, error };
  }

  const cartItems: cart = res.data;

  try {
    // Fetch all product details in parallel
    const productPromises = cartItems.products.map(async ({ productId, quantity }) => {
      const res = await fetchIndividualProduct(productId);
      if (res.error) {
        throw new Error("Error fetching product details");
      }

      const productDetails: item = res.data;
      return { productDetails, quantity };
    });

    // Wait for all promises to resolve
    const results = await Promise.all(productPromises);

    // Process the results
    data = results.map(({ productDetails }) => productDetails);
  } catch (err) {
    error = err;
  }

  console.log("this is being returned", { data, error });

  return { data, error };
};
