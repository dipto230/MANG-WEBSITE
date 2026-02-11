import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { dummyProducts } from "../../data/products"

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find product by id
  const product = dummyProducts.find(p => p.id === id)

  if (!product) {
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
    )
  }

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Product Info */}
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
            Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails
