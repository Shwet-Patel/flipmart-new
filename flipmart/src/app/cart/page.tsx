"use client";
import ProductsDisplay from "../../components/productsDisplay";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

import { fetchCartDetails } from "@/services/cart.service";

function cart() {
  const [productDetails, setProductDetails] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      const { data, error }: { data: item[]; error: any } =
        await fetchCartDetails();

      let total = 0;

      setProductDetails(data);
      setError(error);
      setLoading(false);
    };

    fetching();
  }, []);

  return (
    <div className="min-h-[50vh] px-16 py-8  ">
      <div className="flex gap-x-8">
        <div className="basis-3/4">
          <h1 className="text-2xl text-gray-800 font-semibold mb-4">
            Shopping Cart
          </h1>

          <div className="p-4 mt-4">
            <div className="flex my-4 ">
              <div className=" flex items-center justify-center basis-3/4">
                Details
              </div>
              <div className="basis-1/4 pl-16">Net Price</div>
            </div>
            <hr />
            {!error &&
              !loading &&
              productDetails?.map((t) => {
                // setTotal((prev) => prev + t.price * (t.itemQuantity || 0));
                return (
                  <div key={t.id} className="flex my-4 ">
                    <div className=" flex items-center justify-center basis-1/4">
                      <Image
                        src={t.image}
                        alt="product"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="basis-2/4">
                      <h1 className="text-lg font-semibold">{t.title}</h1>
                      <h3> Quantity : {t.itemQuantity} </h3>
                      <h3> Unit Price : $ {t.price} </h3>
                    </div>
                    <div className="basis-1/4 pl-16">
                      $ {(t.price * (t.itemQuantity || 0)).toFixed(2)}
                    </div>
                  </div>
                );
              })}

            <hr />
            <div className="flex my-4 ">
              <div className=" flex items-center justify-center basis-3/4">
                Grand Total
              </div>
              <div className="basis-1/4 pl-16">$ {total}</div>
            </div>
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
      {/* <ProductsDisplay
        title="Inspired by your browsing history"
        category="new"
      /> */}
    </div>
  );
}

export default cart;
