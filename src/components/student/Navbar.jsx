import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const location = useLocation()
  const isCourseListPage = location.pathname.includes('/course-list')
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('Eng')

  const languages = ['Eng', 'বাংলা', 'Hindi', 'Arabic']

  return (
    <header className="w-full">
      {/* ================= Top Info Bar ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <span>+880 1893003583</span>
          <span className="hidden md:block">info@manguu.com</span>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-4 py-1 border rounded-full flex items-center gap-2 hover:bg-gray-50"
            >
              {language}
              <span className="text-xs">▼</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang)
                      setLangOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= Main Navbar ================= */}
      <div
        className={`border-b ${
          isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-1 flex items-center gap-6">
          
          {/* Logo */}
          <img
            src={assets.logo_mang}
            alt="logo"
            className="w-16 cursor-pointer"
          />

          {/* Search (controlled width) */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-[320px] lg:w-[380px] px-5 py-2 rounded-full border outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Navigation */}
          <nav className="ml-auto hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <Link to="/about" className="hover:text-black">About Us</Link>
            <Link to="/services" className="hover:text-black">Service</Link>
            <Link to="/projects" className="hover:text-black">Projects</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>

            {user && (
              <>
                <Link to="/my-enrollments" className="hover:text-black">
                  My Enrollments
                </Link>
                <button className="hover:text-black">
                  Become Educator
                </button>
              </>
            )}

            {user ? (
              <UserButton />
            ) : (
              <button
                onClick={() => openSignIn()}
                className="bg-blue-600 text-white px-5 py-2 rounded-full"
              >
                Create Account
              </button>
            )}
          </nav>

          {/* Mobile */}
          <div className="ml-auto md:hidden">
            {user ? (
              <UserButton />
            ) : (
              <button onClick={() => openSignIn()}>
                <img src={assets.user_icon} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
