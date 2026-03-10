import React from "react";
import Footer from "../../components/student/Footer";

const portfolioProjects = [
  {
    title: "Restaurant Website",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    description: "Full stack MERN restaurant management system.",
  },

  {
    title: "E-commerce Store",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c",
    description: "Online store with payment integration.",
  },

  {
    title: "Brand Logo Design",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1",
    description: "Modern logo design for startup brands.",
  },

  {
    title: "Product Animation",
    category: "3D Animation",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    description: "3D animated promotional product video.",
  },

  {
    title: "VFX Short Film",
    category: "VFX",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    description: "Cinematic visual effects for short movie.",
  },

  {
    title: "Social Media Campaign",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    description: "Instagram growth marketing campaign.",
  },
];

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
      "Professional, creative and very responsive. Highly recommended for digital projects.",
  },

  {
    name: "David Lee",
    role: "Business Owner",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Our website traffic increased massively after working with them. Great work!",
  },
];

const Portfolio = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}

          <div>
            <span className="text-blue-600 font-semibold">
              Featured Work
            </span>

            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Crafting Digital Experiences That Inspire
            </h1>

            <p className="text-gray-600 mt-6">
              We design and develop powerful digital solutions for
              businesses around the world. Our work focuses on
              creativity, performance and meaningful user
              experiences.
            </p>

            <p className="mt-6 text-gray-500">
              Every project is built with passion, innovation and
              attention to detail.
            </p>
          </div>

          {/* RIGHT IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}

      <section className="py-24 bg-gray-50 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Selected Projects
            </h2>

            <p className="text-gray-600 mt-3">
              A glimpse of our creative and technical work
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {portfolioProjects.map((project, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* overlay */}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <button className="bg-white px-5 py-2 rounded-full text-sm font-semibold">
                      View Project
                    </button>

                  </div>

                </div>

                <div className="p-6">

                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {project.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

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

      {/* ================= CTA SECTION ================= */}

      <section className="py-24 bg-gray-50 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="text-gray-600 mt-6">
            Let's build something amazing together and take your
            business to the next level.
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