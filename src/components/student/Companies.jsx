import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500">
          Trusted by learners from
        </p>

        {/* Logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          <img
            src={assets.adobe_logo_2}
            alt="Adobe"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

          <img
            src={assets.cannon_icon}
            alt="Canon"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

          <img
            src={assets.davinci_logo}
            alt="DaVinci Resolve"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

          <img
            src={assets.fujifilm_logo}
            alt="Fujifilm"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

          <img
            src={assets.premiere_logo}
            alt="Adobe Premiere Pro"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

            <img
            src={assets.Nikon_logo}
            alt="Nikon"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

              <img
            src={assets.light_room_logo}
            alt="Adobe Light Room"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />

              <img
            src={assets.adobe_logo_3}
            alt="adobe illustrator"
            className="h-8 md:h-9 object-contain opacity-80 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
