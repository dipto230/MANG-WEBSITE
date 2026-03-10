import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/student/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Startup Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Amazing experience. The team delivered exactly what we needed and our product launch was a success.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Professional, creative and very responsive. Highly recommended.",
  },
  {
    name: "David Lee",
    role: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Our website traffic increased massively after working with them.",
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://mang-website-redeploy.vercel.app/api/project/all"
        );

        if (data.success) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-blue-600 font-semibold">
              Featured Work
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Crafting Digital Experiences That Inspire
            </h1>

            <p className="text-gray-600 mt-6">
              We design and develop powerful digital products
              for businesses around the world.
            </p>

            <p className="mt-6 text-gray-500">
              Every project is built with passion and innovation.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= PROJECT SLIDER ================= */}

      <section className="py-24 bg-gray-50 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Selected Projects
            </h2>

            <p className="text-gray-600 mt-3">
              A glimpse of our creative work
            </p>

          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {projects.map((project) => (

              <SwiperSlide key={project._id}>

                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500">

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white px-5 py-2 rounded-full text-sm font-semibold"
                      >
                        View Project
                      </a>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                      {project.description}
                    </p>

                    {/* Tech */}

                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.tech?.map((tech) => (

                        <span
                          key={tech}
                          className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    <div className="flex gap-5 mt-4 text-sm font-medium">

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600"
                      >
                        Live
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700"
                      >
                        GitHub
                      </a>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      {/* ================= TESTIMONIAL ================= */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {testimonials.map((t, index) => (

              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <img
                  src={t.img}
                  className="w-14 h-14 rounded-full mb-4"
                />

                <p className="text-gray-600 mb-4">
                  "{t.review}"
                </p>

                <h4 className="font-semibold">
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

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gray-50 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="text-gray-600 mt-6">
            Let's build something amazing together.
          </p>

          <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Start Your Project
          </button>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Portfolio;