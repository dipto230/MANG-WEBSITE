import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  console.log("PRODUCT DATA:", product);

    const handleBuyNow = async () => {
  try {

    const res = await fetch(
      "https://mang-website-redeploy.vercel.app/api/payment/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: [
            {
              productId: product._id,
              quantity: 1,
            },
          ],
        }),
      }
    );

    const data = await res.json();
     console.log("CHECKOUT RESPONSE:", data);

    if (data.url) {
      window.location.href = data.url;
    }

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="border rounded-xl p-4 shadow-md">

      {/* IMAGE CLICKABLE */}
      <Link to={`/product/${product._id}`}>
        <img 
          src={product.image} 
          alt={product.title}
          className="h-60 w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition"
        />
      </Link>

      {/* TITLE CLICKABLE */}
      <Link to={`/product/${product._id}`}>
        <h2 className="mt-4 text-xl font-semibold hover:underline cursor-pointer">
          {product.title}
        </h2>
      </Link>

      <p className="text-gray-600">
        ${product.price}
      </p>

      <div className="flex gap-3 mt-4">

        <Link to={`/product/${product._id}`}>
          <button className="bg-black text-white px-4 py-2 rounded">
            View Details
          </button>
        </Link>

        <button
          onClick={handleBuyNow}
          className="bg-green-600 text-white px-4 py-2 rounded">
          Buy Now
        </button>

      </div>

    </div>
  );
};

export default ProductCard;