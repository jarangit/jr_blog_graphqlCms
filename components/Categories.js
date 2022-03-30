import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../service";

const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCat) => setcategories(newCat));
  }, []);
  console.log(categories);
  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((item, key) => (
        <Link href={`/category/${item.slug}`} key={key}>
          <span
            className={`cursor-pointer block ${
              key === categories.length - 1
                ? "border-b-0"
                : "border-b"
            } pb-3 mb-3`}>
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
