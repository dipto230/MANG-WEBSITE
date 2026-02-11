import React from "react"
import { Outlet, Link } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>

        <Link to="/admin/dashboard" className="block hover:text-gray-300">
          Dashboard
        </Link>

        <Link to="/admin/products" className="block hover:text-gray-300">
          Products
        </Link>

        <Link to="/admin/add-product" className="block hover:text-gray-300">
          Add Product
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("adminAuth")
            window.location.href = "/admin-login"
          }}
          className="mt-6 text-red-400"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-10 bg-gray-50">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
