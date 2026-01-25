import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Let’s Work Together
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have an idea, project, or question? We’d love to hear from you.
          Let’s build something meaningful.
        </p>

        {/* Contact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900">Fast Response</h4>
            <p className="text-sm text-gray-600 mt-2">
              We usually respond within 24 hours.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900">Clear Communication</h4>
            <p className="text-sm text-gray-600 mt-2">
              Transparent discussion from start to finish.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900">Tailored Solutions</h4>
            <p className="text-sm text-gray-600 mt-2">
              Every project is crafted to your needs.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-10 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          Contact us →
        </button>
      </div>
    </section>
  );
};

export default ContactPreview;
