import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {

  const location = useLocation()
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const { navigate, isEducator, backendUrl, setIsEducator, getToken } = useContext(AppContext)

  const [langOpen,setLangOpen] = useState(false)
  const [language,setLanguage] = useState("Eng")

  const languages = ["Eng","বাংলা","Hindi","Arabic"]

  const becomeEducator = async () => {
    try {

      if(isEducator){
        navigate("/educator")
        return
      }

      const token = await getToken()

      const {data} = await axios.get(
        backendUrl + "/api/educator/update-role",
        { headers:{ Authorization:`Bearer ${token}` } }
      )

      if(data.success){
        setIsEducator(true)
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (

<header className="w-full bg-white border-b sticky top-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

{/* ===== Logo ===== */}

<img
src={assets.new_mookup_logo}
onClick={()=>navigate("/")}
className="w-16 cursor-pointer"
/>


{/* ===== Navigation ===== */}

<nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">

<Link to="/about" className="hover:text-black">About</Link>
<Link to="/services" className="hover:text-black">Services</Link>
<Link
  to="/portfolio"
  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:scale-105 hover:shadow-lg transition"
>
  Portfolio
</Link>
<Link to="/projects" className="hover:text-black">Projects</Link>
<Link to="/pricing" className="hover:text-black">Pricing</Link>
<Link to="/store" className="hover:text-black">Store</Link>
<Link to="/contact" className="hover:text-black">Contact</Link>

</nav>


{/* ===== Right Side ===== */}

<div className="flex items-center gap-4">

{/* Search */}

<input
type="text"
placeholder="Search..."
className="hidden lg:block w-[200px] px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-blue-400"
/>


{/* Language */}

<div className="relative hidden md:block">

<button
onClick={()=>setLangOpen(!langOpen)}
className="px-3 py-1 border rounded-full text-sm"
>
{language}
</button>

{langOpen && (

<div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-md">

{languages.map((lang)=>(
<button
key={lang}
onClick={()=>{
setLanguage(lang)
setLangOpen(false)
}}
className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
>
{lang}
</button>
))}

</div>

)}

</div>


{/* Educator */}

{user && (
<button
onClick={becomeEducator}
className="hidden md:block text-gray-600 hover:text-black"
>
{isEducator ? "Dashboard" : "Become Educator"}
</button>
)}


{/* User */}

{user ? (

<UserButton/>

) : (

<button
onClick={()=>openSignIn()}
className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
>
Sign In
</button>

)}

</div>

</div>

</header>

  )
}

export default Navbar