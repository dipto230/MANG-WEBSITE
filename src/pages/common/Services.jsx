import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/student/Footer";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

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
        console.log("Service fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Auto Scroll Effect
  useEffect(() => {
    if (isPaused) return;

    autoScrollRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 1,
          behavior: "smooth"
        });
      }
    }, 20);

    return () => clearInterval(autoScrollRef.current);
  }, [isPaused]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading services...</p>
      </div>
    );
  }

  return (
    <>
      {/* ================= SERVICES INTRO ================= */}

      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Services
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We combine creativity, technology, and strategy to build digital
              experiences that make your brand stand out. From modern websites
              to visual storytelling and marketing solutions — we help turn
              your ideas into impactful digital products.
            </p>

            <p className="mt-4 text-gray-500">
              Our mission is simple: create meaningful digital experiences that
              inspire audiences and drive real business growth.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Start a Project →
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              alt="services"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES SLIDER ================= */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Explore Our Services
          </h2>

          <div className="relative">

            {/* LEFT BUTTON */}

            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10"
            >
              ◀
            </button>

            {/* SLIDER */}

            <div
              ref={sliderRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            >
              {services.map((service) => (
                <div
                  key={service._id}
                  onClick={() => navigate(`/service/${service._id}`)}
                  className="min-w-[320px] snap-start bg-white rounded-3xl shadow-md hover:shadow-2xl transition cursor-pointer group"
                >

                  <div className="overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {service.description.slice(0, 120)}...
                    </p>

                    <button className="mt-4 text-blue-600 font-medium hover:underline">
                      View Details →
                    </button>

                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT BUTTON */}

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10"
            >
              ▶
            </button>

          </div>

          {/* PAUSE / PLAY BUTTON */}

          <div className="flex justify-center mt-8">

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              {isPaused ? "▶ Play" : "⏸ Pause"}
            </button>

          </div>

        </div>

      </section>

      {/* ================= TRUSTED BRANDS ================= */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-semibold text-gray-700 mb-10">
            Trusted by Leading Brands
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">

            <img className="h-8" src="https://cdn.worldvectorlogo.com/logos/google-1.svg" />
            <img className="h-8" src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
            <img className="h-8" src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" />
            <img className="h-8" src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" />
            <img className="h-8" src="https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" />

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-14">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                name: "Sarah Johnson",
                role: "Startup Founder",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "Amazing service and very professional team. They helped our business grow significantly."
              },
              {
                name: "Michael Lee",
                role: "Marketing Director",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "Highly recommend them! The quality of work and support is outstanding."
              },
              {
                name: "David Smith",
                role: "Product Manager",
                image: "https://randomuser.me/api/portraits/men/46.jpg",
                text: "They transformed our digital presence. Truly a fantastic experience working with them."
              }
            ].map((t, i) => (

              <div key={i} className="p-8 rounded-2xl shadow-md bg-gray-50">

                <img
                  src={t.image}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />

                <p className="text-gray-600 italic">
                  "{t.text}"
                </p>

                <h4 className="mt-6 font-semibold">
                  {t.name}
                </h4>

                <span className="text-sm text-gray-500">
                  {t.role}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT FORM ================= */}

      <section className="py-24 bg-gray-50 px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>

          <form className="bg-white shadow-lg rounded-3xl p-10 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-lg w-full"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-lg w-full"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border p-3 rounded-lg w-full"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Services;