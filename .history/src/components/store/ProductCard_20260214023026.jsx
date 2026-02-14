import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  console.log("PRODUCT DATA:", product);

  return (
    <div className="border rounded-xl p-4 shadow-md">
      <img 
        src={product.image} 
        alt={product.title}
        className="h-60 w-full object-cover rounded-lg" 
      />
      <h2 className="mt-4 text-xl font-semibold">
        {product.title}
      </h2>
      <p className="text-gray-600">
        ${product.price}
      </p>

      <Link to={`/product/${product._id}`}>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
