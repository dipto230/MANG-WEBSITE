import React, { useState, useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const { addProduct } = useContext(AppContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct(form)
    navigate("/admin/products")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Product
        </button>

      </form>
    </div>
  )
}

export default AddProduct
