import React from "react";
import { dummyServices } from "../../assets/assets";

const Services = () => {
  return (
    <>
      {/* ===== TYPOGRAPHY SECTION (UNCHANGED — DO NOT TOUCH) ===== */}
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

      {/* ===== SERVICES SECTION (M SHAPE CARDS) ===== */}
      <section className="-mt-24 w-full px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">

          {/* TOP ROW (2 CARDS) */}
          <div className="grid md:grid-cols-2 gap-20">
            {dummyServices.slice(0, 2).map((service) => (
              <div
                key={service.id}
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
                  <p className="text-sm text-gray-600">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM CENTER CARD (LOWER — M VALLEY) */}
          <div className="mt-36 flex justify-center">
            <div className="w-full md:w-[52%] rounded-3xl overflow-hidden bg-white shadow-md">
              <img
                src={dummyServices[2].image}
                alt={dummyServices[2].title}
                className="w-full h-[340px] object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  {dummyServices[2].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {dummyServices[2].shortDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
