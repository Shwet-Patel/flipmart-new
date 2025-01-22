"use client";
import ProductsDisplay from "../../components/productsDisplay";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

function cart() {
  const [cartItems, setCartItems] = useState<cart>();
  const [productDetails, setProductDetails] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const url = "https://fakestoreapi.com/carts/1";

    const fetchdata = async () => {
      setLoading(true);
      try {
        const response: cart = (await axios.get(url)).data;
        setCartItems(response);

        response.products.forEach(async ({ productId, quantity }) => {
          const res = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
          );

          setProductDetails((prev) => [
            ...prev,
            { ...res.data, itemQuantity: quantity },
          ]);
        });

        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="min-h-[50vh] px-16 py-8  ">
      <div className="flex gap-x-8">
        <div className="basis-3/4">
          <h1 className="text-2xl text-gray-800 font-semibold mb-4">
            Shopping Cart
          </h1>
          <h3 className="text-right mr-8">Net Price</h3>
          <hr />
          <div className="p-4 mt-4">
            {!error &&
              !loading &&
              productDetails?.map((t) => {
                // setTotal((prev) => prev + t.price * (t.itemQuantity || 0));
                return (
                  <div className="flex my-4 ">
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
                    <div className="basis-1/4">
                      {" "}
                      $ {t.price * (t.itemQuantity || 0)}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="basis-1/4"></div>
      </div>
      <ProductsDisplay
        title="Inspired by your browsing history"
        category="new"
      />
    </div>
  );
}

export default cart;
