import React from "react";

const LegacyInquirySection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center px-6">
        
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            WE BUILT <br /> LEGACY
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Tell us about your idea. We help turn concepts into powerful digital
            experiences.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-5 text-center">
            Inquiry Form
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="input" />
              <input type="text" placeholder="Last name" className="input" />
            </div>

            <input type="email" placeholder="Email" className="input w-full" />

            <input type="tel" placeholder="Phone" className="input w-full" />

            <textarea
              rows="3"
              placeholder="Write a message"
              className="input w-full resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LegacyInquirySection;
