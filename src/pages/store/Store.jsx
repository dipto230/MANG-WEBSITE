import React from "react"
import { dummyProducts } from "../../data/products"
import ProductCard from "../../components/store/ProductCard"

const Store = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Official Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Store
