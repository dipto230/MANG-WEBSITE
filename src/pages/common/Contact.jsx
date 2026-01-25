import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Whether you have a question, a project idea, or just want to say
            hello — we’re here to help.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p><strong>Email:</strong> hello@manguiu.com</p>
            <p><strong>Phone:</strong> +91 90000 00000</p>
            <p><strong>Location:</strong> Remote · Worldwide</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-5">
            Send us a message
          </h3>

          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="input" />
            <input type="email" placeholder="Email address" className="input" />
            <textarea
              rows="4"
              placeholder="Your message"
              className="input resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
