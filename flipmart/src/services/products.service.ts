import { AxiosRequestConfig } from "axios";
import { provideData } from "../utils/provideData";
import { generateMetadata } from "@/utils/getMetadata";


/* for products in specific category */
export const fetchCategoryProducts = async (category : string) => {
    const url =
      category === "new"
        ? "products"
      : `products/category/${category}`;
  
  
  const config: AxiosRequestConfig = {
    url: url,
    method: 'get'
  };
    
    return await provideData(config);
};


/* for individual products */
export const fetchIndividualProduct = async (id: string) => {
  
  const url = `https://fakestoreapi.com/products/${id}`;
  const config: AxiosRequestConfig = {
    url: url,
    method: 'get'
  };
    
  const res = await provideData(config);

  generateMetadata(res.data.title || 'loading...');
  return res;
}

/* for fetching hot Deals */
export const fetchHotDeals = () => {
  const id = Math.floor(Math.random() * 5 + 1).toString();
  return fetchIndividualProduct(id);
}
