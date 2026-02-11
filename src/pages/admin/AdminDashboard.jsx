import React, { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"

const AdminDashboard = () => {
  const { products, addProduct, deleteProduct, updateProduct } =
    useContext(AppContext)

  const [editingId, setEditingId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  })

  // Handle Add
  const handleAdd = (e) => {
    e.preventDefault()
    if (!form.name || !form.price) return alert("Fill all fields")

    addProduct(form)
    setForm({ name: "", price: "", image: "", description: "" })
  }

  // Handle Edit Save
  const handleUpdate = (id) => {
    updateProduct({ ...form, id })
    setEditingId(null)
  }

  return (
    <div className="p-10 space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("adminAuth")
            window.location.href = "/admin-login"
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-2xl font-bold">{products.length}</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold">$0</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>

      {/* ADD PRODUCT */}
      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>

        <form onSubmit={handleAdd} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            className="border p-2"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            className="border p-2"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            className="border p-2 col-span-2"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <textarea
            placeholder="Description"
            value={form.description}
            className="border p-2 col-span-2"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button
            type="submit"
            className="bg-black text-white py-2 col-span-2 rounded"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* PRODUCT LIST */}
      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-bold mb-4">All Products</h2>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              {editingId === product.id ? (
                <div className="flex-1 space-y-2">
                  <input
                    type="text"
                    defaultValue={product.name}
                    className="border p-1 w-full"
                    onChange={(e) =>
                      setForm({ ...product, name: e.target.value })
                    }
                  />

                  <input
                    type="number"
                    defaultValue={product.price}
                    className="border p-1 w-full"
                    onChange={(e) =>
                      setForm({ ...product, price: e.target.value })
                    }
                  />

                  <button
                    onClick={() => handleUpdate(product.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="font-bold">{product.name}</h3>
                    <p>${product.price}</p>
                  </div>

                  <div className="space-x-3">
                    <button
                      onClick={() => setEditingId(product.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
