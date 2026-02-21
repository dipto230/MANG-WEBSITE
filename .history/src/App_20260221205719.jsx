import React from 'react'
import { Route, Routes, useMatch, useLocation  } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import About from './pages/common/About'
import Services from './pages/common/Services'
import Projects from './pages/common/Projects'
import Contact from './pages/common/Contact'
import "quill/dist/quill.snow.css"
import Store from './pages/store/Store'
import ProductDetails from './pages/store/ProductDetails'
import AdminLogin from './pages/admin/AdminLogin'
import PrivateAdminRoute from './pages/admin/PrivateAdminRoute'
import AdminDashboard from './pages/admin/AdminDashboard'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const isEducatorRoute = useMatch('/educator/*')
    const location = useLocation()

  const hideNavbar =
    isEducatorRoute ||
    location.pathname.startsWith('/admin')

  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer/>
      {/* {!isEducatorRoute && <Navbar/>} */}
      {!hideNavbar && <Navbar/>}

      
     <Routes>

  {/* ===== Public / Common Routes ===== */}
  <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />

  <Route path='/' element={<Home />} />
  <Route path='/course-list' element={<CourseList />} />
  <Route path='/course-list/:input' element={<CourseList />} />
  <Route path='/course/:id' element={<CourseDetails />} />
  <Route path='/my-enrollments' element={<MyEnrollments />} />
  <Route path='/player/:courseId' element={<Player />} />
  <Route path='/loading/:path' element={<Loading />} />

  {/* ===== STORE ROUTES ===== */}
  <Route path="/store" element={<Store />} />
  <Route path="/product/:id" element={<ProductDetails />} />

  {/* ===== ADMIN ROUTES ===== */}
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route
    path="/admin/dashboard"
    element={
      <PrivateAdminRoute>
        <AdminDashboard />
      </PrivateAdminRoute>
    }
  />

  {/* ===== EDUCATOR ROUTES ===== */}
  <Route path='/educator' element={<Educator />}>
    <Route path='/educator' element={<Dashboard />} />
    <Route path='add-course' element={<AddCourse />} />
    <Route path='my-courses' element={<MyCourses />} />
    <Route path='student-enrolled' element={<StudentsEnrolled/>} />
  </Route>

</Routes>

    </div>
  )
}

export default App