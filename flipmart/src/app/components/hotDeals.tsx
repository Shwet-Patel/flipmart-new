"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

type item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function hotDeals() {
  const [product, setProduct] = useState<item>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products/1");
        console.log(response);
        setProduct(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="bg-gray-50 p-4 mt-4 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Hot Deal</h2>
      {!loading && !error && (
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          {product?.image && (
            <Image
              src={product.image}
              alt="Product"
              width={60}
              height={60}
              className="h-auto w-auto place-self-center rounded"
            />
          )}
          <h3 className="text-lg font-semibold mt-4">
            {product?.title?.length > 20
              ? product?.title.substring(0, 20) + "..."
              : product?.title}
          </h3>
          <p className="text-yellow-500 font-bold text-lg mt-2">
            ${product.price}
          </p>
          <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

export default hotDeals;
