import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Footer from "../../components/student/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  const fetchProducts = async () => {
    try {

      const res = await fetch(
        "https://mang-website-redeploy.vercel.app/api/products"
      );

      const data = await res.json();

      setProducts(data.products);

      const foundProduct = data.products.find(
        (item) => item._id === id
      );

      setProduct(foundProduct);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [id]);

  if (loading) {
    return <div className="p-10 text-xl">Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/store")}
          className="mt-4 bg-black text-white px-4 py-2 rounded"
        >
          Back to Store
        </button>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item._id !== id
  );

  return (
    <>
    <div className="p-10 max-w-6xl mx-auto">

      {/* PRODUCT DETAILS */}
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

          <p className="text-2xl text-gray-700 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            <span className="font-semibold">Stock:</span>{" "}
            {product.stock > 0 ? (
              <span className="text-green-600">
                {product.stock} available
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>

          <button
            disabled={product.stock === 0}
            className={`px-6 py-3 rounded text-white ${
              product.stock === 0
                ? "bg-gray-400"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate("/store")}
            className="ml-4 px-6 py-3 border border-black rounded"
          >
           Order Now
          </button>
        </div>

      </div>

      {/* RELATED PRODUCTS */}

      <div className="mt-24">

        <h2 className="text-3xl font-bold text-center mb-10">
          Related Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {relatedProducts.slice(0,3).map((item) => (

            <Link
              key={item._id}
              to={`/product/${item._id}`}
              className="bg-white rounded-xl shadow hover:shadow-xl transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-4">

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  ${item.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>
      

      </div>
      <Footer/>
    </>
    
  );
};

export default ProductDetails;