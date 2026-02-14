import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const ADMIN_EMAIL = "your@email.com"

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email === ADMIN_EMAIL) {
      localStorage.setItem("adminAuth", "true")
      navigate("/admin/dashboard")
    } else {
      alert("Unauthorized")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 border rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Enter admin email"
          className="border p-2 w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default AdminLogin
