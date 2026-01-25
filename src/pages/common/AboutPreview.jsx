import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why MANGUUU?
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We turn ideas into stories that captivate and connect — blending
          creativity, precision, and results-driven execution.
        </p>

        {/* Highlight Cards (short) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {[
            "Free Revisions",
            "Fast Turnaround",
            "High Performance ROI",
          ].map((title, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-900">{title}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Crafted to deliver quality, speed, and measurable impact.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/about")}
          className="mt-10 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          Learn more about us →
        </button>
      </div>
    </section>
  );
};

export default AboutPreview;
