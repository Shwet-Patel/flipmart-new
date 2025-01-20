"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function categories() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        // console.log(response);
        setCategory(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="space-y-2 flex flex-col">
        {!loading &&
          !error &&
          category.map((c, index) => {
            // console.log(index);
            // console.log(c);

            return (
              <Link
                key={index}
                href=""
                className="text-gray-700 hover:text-blue-600"
              >
                {c}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default categories;
