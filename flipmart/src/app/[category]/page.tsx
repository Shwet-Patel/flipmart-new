"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

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

function page() {
  const category = useParams<{ category: string }>().category.replace(
    "%20",
    " "
  );

  const [products, setProducts] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/category/${category}`;

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
    <div className="px-16 py-4">
      <h1 className="text-3xl font-bold text-gray-700 my-8">
        Explore the trends in{" "}
        <span className="text-black capitalize">{category}</span>
      </h1>
      {!error &&
        !loading &&
        products.map((t) => {
          return (
            <div
              key={t.id}
              className="flex bg-gray-50 gap-x-8 my-4 rounded-lg shadow-md p-4"
            >
              <div className="flex min-h-32 min-w-32 justify-center items-center">
                <Image src={t.image} alt="product" height={80} width={80} />
              </div>
              <div>
                <h1 className="text-lg font-semibold my-2">{t.title}</h1>
                <h1 className="text-lg font-semibold my-2">
                  Price: <span className="">$ {t.price}</span>
                </h1>
                <h1 className=" text-sm  my-2 mb-4">{t.description}</h1>
                <Link
                  href={`/products/${t.id}`}
                  className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300"
                >
                  details
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default page;
