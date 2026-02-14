import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-6 bg-white'>
      {/* MAX WIDTH CONTAINER (FIXES FULL WIDTH ISSUE) */}
      <div className='max-w-6xl mx-auto'>

        <h2 className='text-3xl font-medium text-gray-800 text-center'>
          Testimonials
        </h2>

        <p className='md:text-base text-gray-500 mt-3 text-center'>
          Hear from our learners as they share their journeys of transformation,
          success and how our <br /> platform has made a difference in their lives
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>
          {dummyTestimonial.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className='
                text-sm text-left
                border border-gray-500/30
                pb-6 rounded-lg
                bg-white
                shadow-[0px_4px_15px_0px]
                shadow-black/5
                overflow-hidden
                hover:-translate-y-2
                transition-all duration-300
              '
            >
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img
                  className='h-12 w-12 rounded-full'
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>
                    {testimonial.name}
                  </h1>
                  <p className='text-gray-800/80'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className='p-5 pb-7'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className='h-5'
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt='star'
                    />
                  ))}
                </div>

                <p className='text-gray-500 mt-5'>
                  {testimonial.feedback}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TestimonialsSection
