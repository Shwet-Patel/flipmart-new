"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import ProductsDisplay from "@/components/productsDisplay";

function details() {
  const id = useParams<{ id: string }>().id;

  const [product, setProduct] = useState<item>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
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
    !loading &&
    !error && (
      <div className="py-8 px-16">
        <div className="flex justify-around gap-x-8 ">
          <div className="flex basis-1/3 justify-center py-4 rounded-lg shadow-lg">
            {product?.image && (
              <Image
                src={product.image}
                alt="Product"
                width={150}
                height={150}
                className="h-auto w-auto"
                priority
              />
            )}
          </div>
          <div className="basis-2/3">
            <div className=" text-2xl font-bold">{product?.title}</div>
            <div className="py-2 text-gray-600 text-lg">
              {product?.description}
            </div>
            <div className="py-2 font-bold">
              Rating:
              <span className="text-gray-700">
                {" "}
                {product?.rating?.rate} ( average of total{" "}
                {product?.rating?.count} ratings){" "}
              </span>
            </div>

            <div className="py-2 font-bold">
              Price: <span className="text-gray-700"> $ {product?.price} </span>
            </div>
            <div className="py-2 font-bold mb-4">
              Category:
              <span className="text-gray-700"> {product?.category}</span>{" "}
            </div>

            <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300 mr-4">
              Add to cart
            </button>
            <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
              Buy now
            </button>
          </div>
        </div>

        <ProductsDisplay
          title={`Explore more in ${product?.category}`}
          category={product?.category}
        />
        <ProductsDisplay title="New Products" category="new" />
      </div>
    )
  );
}

export default details;
