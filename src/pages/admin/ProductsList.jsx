import React, { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { Link } from "react-router-dom"

const ProductsList = () => {
  const { products, deleteProduct } = useContext(AppContext)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-4 bg-white shadow rounded"
          >
            <div>
              <h2 className="font-bold">{product.name}</h2>
              <p>${product.price}</p>
            </div>

            <div className="space-x-3">
              <Link
                to={`/admin/edit-product/${product.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
