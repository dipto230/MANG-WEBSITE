import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          "https://mang-website-redeploy.vercel.app/api/service/all"
        );

        if (data.success) {
          const foundService = data.services.find(
            (item) => item._id === id
          );
          setService(foundService);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return (
      <div className="text-center py-32 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-12 text-sm text-gray-500 hover:text-black transition"
      >
        ← Back to Services
      </button>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - DESCRIPTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {service.description}
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-sm h-[320px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;