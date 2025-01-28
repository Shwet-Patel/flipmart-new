"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { fetchAllCategories } from "@/services/category.service";

function categories() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      const { data, error } = await fetchAllCategories();
      setCategory(data);
      setError(error);
      setLoading(false);
    };

    fetching();
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
                href={`/${c}`}
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
