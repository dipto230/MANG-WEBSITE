import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/student/Footer";
import CallToAction from "../../components/student/CallToAction";
import { assets } from "../../assets/assets";

const Services = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          "https://mang-website-redeploy.vercel.app/api/service/all"
        );

        if (data.success) {
          setServices(data.services);
        }
      } catch (error) {
        console.log("Service fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const duplicatedServices = [...services, ...services];

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading services...</p>
      </div>
    );
  }

  return (
    <>

{/* ================= SERVICES INTRO ================= */}

<section className="py-20 bg-gray-50 px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-4xl md:text-5xl font-bold leading-tight">
Our Services
</h2>

<p className="mt-6 text-gray-600 text-lg leading-relaxed">
We combine creativity, technology, and strategy to build digital
experiences that make your brand stand out. From modern websites
to visual storytelling and marketing solutions — we help turn
your ideas into impactful digital products.
</p>

<p className="mt-4 text-gray-500">
Our mission is simple: create meaningful digital experiences that
inspire audiences and drive real business growth.
</p>

<button
onClick={() => navigate("/contact")}
className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
>
Start a Project →
</button>

</div>

<div className="flex justify-center">

<img
src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
alt="services"
className="rounded-3xl shadow-xl w-full max-w-md"
/>

</div>

</div>

</section>


{/* ================= SERVICES SLIDER ================= */}

<section className="py-24 bg-white px-6">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14">
Explore Our Services
</h2>

<div className="overflow-hidden relative">

<div className="flex gap-8 animate-services-scroll">

{duplicatedServices.map((service,index)=>(
  
<div
key={index}
onClick={()=>navigate(`/service/${service._id}`)}
className="min-w-[320px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition cursor-pointer group"
>

<div className="overflow-hidden rounded-t-3xl">

<img
src={service.image}
alt={service.title}
className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
/>

</div>

<div className="p-6">

<h3 className="text-xl font-semibold mb-3">
{service.title}
</h3>

<p className="text-sm text-gray-600">
{service.description.slice(0,120)}...
</p>

<button className="mt-4 text-blue-600 font-medium hover:underline">
View Details →
</button>

</div>

</div>

))}

</div>

</div>

</div>

</section>


{/* ================= TRUSTED BRANDS ================= */}

<section className="py-20 bg-gray-50">

<div className="max-w-6xl mx-auto px-6 text-center">

<h3 className="text-2xl font-semibold text-gray-700 mb-10">
Trusted by Leading Brands
</h3>

<div className="flex flex-wrap justify-center items-center gap-10 opacity-70">

<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/google-1.svg"/>
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg"/>
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg"/>
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg"/>
<img className="h-8" src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg"/>

</div>

</div>

</section>

{/* ================= MOVING TEXT ================= */}

<section className="py-14 bg-white overflow-hidden">

<div className="space-y-6">

{/* Row 1 */}
<div className="whitespace-nowrap animate-marquee-fast text-4xl font-bold">
<span className="mx-10 glow-text">WE BUILD LEGACY</span>
<span className="mx-10 glow-text">MODERN WEB SOLUTIONS</span>
<span className="mx-10 glow-text">CREATIVE DIGITAL EXPERIENCES</span>
<span className="mx-10 glow-text">MANG DIGITAL AGENCY</span>
<span className="mx-10 glow-text">WE BUILD LEGACY</span>
</div>


{/* Row 2 (IMAGE SCROLL) */}

{/* Row 2 (IMAGE MARQUEE) */}

<div className="overflow-hidden">

  <div className="flex items-center gap-20 animate-logo-scroll">

    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />
    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />
    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />
    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />
    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />
    <img src={assets.sponsor_image_nova} className="h-16 object-contain" />

  </div>

</div>

{/* Row 3 */}

<div className="whitespace-nowrap animate-marquee-fast text-4xl font-bold">
<span className="mx-10 glow-text">MERN STACK DEVELOPMENT</span>
<span className="mx-10 glow-text">MODERN WEBSITE DESIGN</span>
<span className="mx-10 glow-text">STARTUP SOLUTIONS</span>
<span className="mx-10 glow-text">DIGITAL PRODUCTS</span>
<span className="mx-10 glow-text">MERN STACK DEVELOPMENT</span>
</div>

</div>

</section>

<CallToAction/>

<Footer/>

</>
);
};

export default Services;