import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/callToAction'
 import ProjectsSection from '../common/ProjectsSection'
import ServicesPreview from '../common/ServicesPreview'
import Footer from '../../components/student/Footer'
import LegacyInquirySection from '../common/LegacyInquirySection'



const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CoursesSection />
      <ProjectsSection/>
      <TestimonialsSection />
      <ServicesPreview />
      <LegacyInquirySection/>
      <CallToAction />
      <Footer/>
    </div>
  )
}

export default Home