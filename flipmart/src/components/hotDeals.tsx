"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchHotDeals } from "@/services/products.service";

function hotDeals() {
  const [product, setProduct] = useState<item>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      const { data, error } = await fetchHotDeals();
      setProduct(data);
      setError(error);
      setLoading(false);
    };

    fetching();
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
            {(product?.title && product.title.length > 20
              ? product.title.substring(0, 20) + "..."
              : product?.title) || "No title"}
          </h3>
          <p className="text-yellow-500 font-bold text-lg my-4">
            ${product?.price}
          </p>
          <Link
            href={`/products/${product?.id}`}
            className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300"
          >
            details
          </Link>
        </div>
      )}
    </div>
  );
}

export default hotDeals;
