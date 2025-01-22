import {provideData} from "./provideData";
  
export const fetchProducts = async (category : string) => {
    const url =
      category === "new"
        ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${category}`;
    
    return await provideData(url);
};

