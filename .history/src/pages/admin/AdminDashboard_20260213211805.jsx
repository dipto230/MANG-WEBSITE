import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const AdminDashboard = () => {
  const { getToken, signOut } = useAuth();

  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  const [products, setProducts] = useState([]);

  /* =======================
     Fetch Admin Stats
  ==========================*/
  const fetchStats = async () => {
    const token = await getToken();

    const res = await fetch(
      "http://localhost:5000/api/admin/stats",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    if (data.success) {
      setStats(data.stats);
    }
  };

  /* =======================
     Fetch Products
  ==========================*/
  const fetchProducts = async () => {
    const res = await fetch(
      "http://localhost:5000/api/products"
    );

    const data = await res.json();
    if (data.success) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchProducts();
  }, []);

  return (
    <div className="p-10 space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-2xl font-bold">
            {stats.totalProducts}
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold">
            ${stats.totalRevenue}
          </p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold">
            {stats.totalOrders}
          </p>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="bg-white shadow p-6 rounded">
        <h2 className="text-xl font-bold mb-4">
          All Products
        </h2>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">
                  {product.title}
                </h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
