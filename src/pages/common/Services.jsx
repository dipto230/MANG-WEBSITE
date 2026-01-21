import React from "react";
import { dummyServices } from "../../assets/assets";

const Services = () => {
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

      {/* ===== PROFESSIONAL HORIZONTAL SERVICES SECTION ===== */}
      <section className="-mt-24 w-full bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {dummyServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] object-cover rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.shortDesc}</p>
                <p className="text-gray-500">{service.fullDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
