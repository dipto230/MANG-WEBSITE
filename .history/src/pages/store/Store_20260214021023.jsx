import React, { useEffect, useState } from "react";
import ProductCard from "../../components/store/ProductCard";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mang-website-backend.vercel.app//api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Official Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
