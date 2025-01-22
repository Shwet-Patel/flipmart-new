/*
categories
cart
indidual product
productlist
*/
import axios from "axios";

export const provideData = async (url: string) => {
    let data = null;
    let error = null;

    try {
      const response = await axios.get(url);
        // console.log(response);
        data = response.data;
    } catch (err: any) {
        error = err.message;
    }

    return { data , error };
};