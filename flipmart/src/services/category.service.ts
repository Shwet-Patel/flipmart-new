import { AxiosRequestConfig } from "axios";
import { provideData } from "../utils/provideData";
import { generateMetadata } from "@/utils/getMetadata";


/* for fetching category */
export const fetchAllCategories = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    const config: AxiosRequestConfig = {
      url: url,
      method: 'get'
    };
      
    return await provideData(config);
  }
  