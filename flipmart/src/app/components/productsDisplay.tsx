"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

type item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

function productsDisplay({
  title,
  category,
}: {
  title: string;
  category: string | undefined;
}) {
  const [products, setProducts] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const url =
      category === "new"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        // console.log(response);
        setProducts(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="mt-8 bg-gray-200 rounded p-4">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex overflow-x-scroll hide-scrollbar mt-4 gap-x-4">
        {!loading &&
          !error &&
          products.map(({ id, image, title, price }) => {
            return (
              <div
                key={id}
                className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0"
              >
                <Image
                  src={image}
                  width={80}
                  height={80}
                  alt="Product"
                  className="w-20 h-20 rounded place-self-center"
                />
                <h3 className="text-lg font-semibold mt-4 max-w-40">
                  {title.length > 20 ? title.substring(0, 20) + "..." : title}
                </h3>
                <p className="text-yellow-500 font-bold text-lg my-4">
                  ${price}
                </p>
                <Link
                  href={`/products/${id}`}
                  className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300"
                >
                  details
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default productsDisplay;
