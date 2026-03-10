import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading services...</p>
      </div>
    );
  }

  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="w-full bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Our Services
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver creative, strategic, and technology-driven solutions
            designed to help your business grow and stand out in the digital world.
          </p>
        </div>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <section className="-mt-20 w-full px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service._id}
              onClick={() => navigate(`/service/${service._id}`)}
              className="group rounded-3xl overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description.slice(0, 150)}...
                </p>

                <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default Services;