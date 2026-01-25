import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Why MANGUUU?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          At Manguiu, we turn ideas into stories that captivate and connect.
          With creativity, precision, and a focus on results, we deliver
          content that makes your brand stand out and leaves a lasting impression.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-14" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {[
            {
              title: "Free Revisions",
              desc: "We make sure your final output is exactly how you envisioned it at no extra cost.",
            },
            {
              title: "Quick Turnaround Time",
              desc: "We deliver efficiently without compromising on quality.",
            },
            {
              title: "Smooth Collaboration",
              desc: "Transparent workflow, clear communication, and dedicated project managers.",
            },
            {
              title: "Data Security",
              desc: "Your files and project details are handled with strict confidentiality.",
            },
            {
              title: "Multi-Platform Compatibility",
              desc: "Optimized content for all devices, screen sizes, and platforms.",
            },
            {
              title: "High Performance & ROI",
              desc: "Strategy-driven content that boosts engagement and conversions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
