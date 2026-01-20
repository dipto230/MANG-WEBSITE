import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyServices } from "../../assets/assets";

const ServicesPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="mt-3 max-w-xl mx-auto">
          A glimpse of what I offer to help bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {dummyServices.slice(0, 3).map(service => (
          <div
            key={service.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("/services")}
          >
            <img src={service.image} alt={service.title} />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-sm mt-2">{service.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 border rounded-md"
        >
          View all services
        </button>
      </div>
    </div>
  );
};

export default ServicesPreview;
