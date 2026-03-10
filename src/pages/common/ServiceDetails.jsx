import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import TestimonialsSection from "../../components/student/TestimonialsSection";
import LegacyInquirySection from "./LegacyInquirySection";
import AboutPreview from "./AboutPreview";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          "https://mang-website-redeploy.vercel.app/api/service/all"
        );

        if (data.success) {
          setServices(data.services);

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

  const otherServices = services.filter((item) => item._id !== id);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-12 text-sm text-gray-500 hover:text-black transition"
      >
        ← Back to Services
      </button>

      {/* SERVICE DETAILS */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {service.description}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-sm h-[320px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />
        </div>

      </div>

      {/* OTHER SERVICES */}
      <div className="mt-24">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Other Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {otherServices.slice(0,3).map((item) => (
            <Link
              key={item._id}
              to={`/service/${item._id}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                   {service.description}
                </h3>
              </div>

            </Link>
          ))}

        </div>

      </div>
      <div className="mt-20">
        <TestimonialsSection />
        <LegacyInquirySection />
        <AboutPreview />
        <CallToAction/>
        
      </div>
          

    </div>
  );
};

export default ServiceDetails;