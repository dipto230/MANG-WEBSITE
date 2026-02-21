import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'

 import ProjectsSection from '../common/ProjectsSection'
import ServicesPreview from '../common/ServicesPreview'
import Footer from '../../components/student/Footer'
import LegacyInquirySection from '../common/LegacyInquirySection'
import AboutPreview from '../common/AboutPreview'
import ContactPreview from '../common/ContactPreview'
import Store from '../store/Store'
import CallToAction from './../../components/student/CallToAction.jsx';



const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <ServicesPreview />
     <ProjectsSection />
      <CoursesSection />
      
       <Store/>
      <TestimonialsSection />
      

      <LegacyInquirySection />
      <AboutPreview />
      
      <CallToAction />
      <ContactPreview/>
      <Footer/>
    </div>
  )
}

export default Home