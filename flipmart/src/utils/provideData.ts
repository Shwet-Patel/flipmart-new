import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({baseURL:"https://fakestoreapi.com/"});

export const provideData = async (requestConfig : AxiosRequestConfig) => {
    let data = null;
    let error = null;

    try {
      const response = await instance.request(requestConfig);
      data = response.data;
    } catch (err: any) {
        error = err.message;
    }

    return { data , error };
};


//request interceptor
instance.interceptors.request.use(
    (config) => {
        // doing something crazy...
        console.log("these are the configs from interceptor" , config);
        return config;
    },

    (error) => {
        console.log("error in request interceptor", error);
        return error;
    }
);


//response interceptor
instance.interceptors.response.use(
    (response) => {
        //doing something crazy...
        console.log("this is from the response interceptor" , response);
        return response;
    },
    (error) => {
        console.log("error in response interceptor", error);
        return error;
    }
);