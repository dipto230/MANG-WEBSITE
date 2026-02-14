import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);

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
      {/* ===== TYPOGRAPHY SECTION (UNCHANGED) ===== */}
      <div className="relative min-h-[calc(100vh-96px)] w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center">

          <h1 className="absolute left-[22%] top-[20%] text-[110px] font-extrabold">
            SER
          </h1>

          <h1 className="absolute right-[22%] top-[20%] text-[110px] font-extrabold">
            ICE
          </h1>

          <h1 className="text-[300px] font-black leading-none">
            V
          </h1>

          <div className="absolute left-[38%] top-[24%] text-sm font-bold leading-tight">
            Ctrl + YOUR <br />
            MIND
          </div>

          <div className="absolute right-[36%] top-[25%] text-sm font-bold leading-tight text-left">
            Create <br />
            <span className="text-xs font-normal">
              Something Ctrl + N
            </span>
          </div>

          <div className="absolute bottom-[22%] text-center">
            <p className="text-3xl font-bold">design</p>
            <p className="text-xs tracking-widest">
              With&nbsp;&nbsp;&nbsp;Us
            </p>
          </div>

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
                className="rounded-3xl overflow-hidden bg-white shadow-md"
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
              <div className="w-full md:w-[52%] rounded-3xl overflow-hidden bg-white shadow-md">
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
