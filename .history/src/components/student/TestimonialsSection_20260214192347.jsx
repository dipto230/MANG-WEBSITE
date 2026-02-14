import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";
import axios from "axios";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/testimonial/all"
        );

        if (data.success) {
          setTestimonials(data.testimonials);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="pb-14 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-medium text-gray-800 text-center">
          Testimonials
        </h2>

        <p className="md:text-base text-gray-500 mt-3 text-center">
          Hear from our learners as they share their journeys of transformation,
          success and how our platform has made a difference in their lives
        </p>

        {loading ? (
          <p className="text-center mt-10 text-gray-500">Loading...</p>
        ) : (
          <>
            {/* Horizontal Scroll Container */}
            <div className="flex gap-8 mt-14 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="
                    min-w-[320px]
                    max-w-[350px]
                    text-sm text-left
                    border border-gray-500/30
                    pb-6 rounded-lg
                    bg-white
                    shadow-[0px_4px_15px_0px]
                    shadow-black/5
                    overflow-hidden
                    hover:-translate-y-2
                    transition-all duration-300
                    flex-shrink-0
                  "
                >
                  <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <h1 className="text-lg font-medium text-gray-800">
                        {testimonial.name}
                      </h1>
                      <p className="text-gray-800/80">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pb-7">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="h-5"
                          src={
                            i < testimonial.rating
                              ? assets.star
                              : assets.star_blank
                          }
                          alt="star"
                        />
                      ))}
                    </div>

                    <p className="text-gray-500 mt-5">
                      {testimonial.message}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

            {/* Slider Hint Text */}
            <p className="text-center text-gray-400 text-sm mt-2">
              ← Scroll to see more →
            </p>
          </>
        )}

      </div>
    </div>
  );
};

export default TestimonialsSection;
