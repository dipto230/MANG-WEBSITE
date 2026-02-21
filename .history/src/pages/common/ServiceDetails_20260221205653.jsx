import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          `https://mang-website-redeploy.vercel.app/api/service/${id}`
        );

        if (data.success) {
          setService(data.service);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchService();
  }, [id]);

  if (!service) return <div className="text-center py-32">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[400px] object-cover rounded-3xl"
      />

      <h1 className="text-4xl font-bold mt-10 mb-6">
        {service.title}
      </h1>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceDetails;