import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-32 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== Left Content ===== */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Where Ideas Meet{' '}
              <span className="font-bold underline decoration-2">
                Impact
              </span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-semibold">MANGUU</span>, we turn{' '}
              <span className="underline font-medium">
                bold business ideas
              </span>{' '}
              into market-ready success stories. From strategic market studies to
              cutting-edge online support, our expertise fuels your growth every
              step of the way.
            </p>

            <p className="text-gray-600 text-base">
              Whether you're launching a startup or scaling your brand, we craft
              marketing that <span className="font-semibold">moves people</span>{' '}
              and markets.
            </p>

            <button className="inline-flex items-center px-8 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
              Book Appointment
            </button>
          </div>

          {/* ===== Right Image ===== */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl h-[420px] rounded-2xl overflow-hidden border bg-gray-50">
              <img
                src={assets.Hero_photo}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
