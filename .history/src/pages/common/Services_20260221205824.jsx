import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
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
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      {/* ===== TYPOGRAPHY SECTION ===== */}
      <div className="w-full bg-gray-50 py-32">
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

      {/* ===== SERVICES SECTION ===== */}
      <section className="-mt-24 w-full px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">

          {/* TOP ROW */}
          <div className="grid md:grid-cols-2 gap-20">
            {services.slice(0, 2).map((service) => (
              <div
                key={service._id}
                onClick={() => navigate(`/service/${service._id}`)}
                className="rounded-3xl overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {service.description.slice(0, 180)}...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CENTER CARD */}
          {services[2] && (
            <div className="mt-36 flex justify-center">
              <div
                onClick={() => navigate(`/service/${services[2]._id}`)}
                className="w-full md:w-[52%] rounded-3xl overflow-hidden bg-white shadow-md cursor-pointer hover:shadow-xl transition duration-300"
              >
                <img
                  src={services[2].image}
                  alt={services[2].title}
                  className="w-full h-[340px] object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {services[2].title}
                  </h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {services[2].description.slice(0, 200)}...
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Services;