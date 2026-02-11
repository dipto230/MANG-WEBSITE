import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const educatorData = dummyEducatorData
  const {user} =  useUser()
  return (
    <div className='h-16 flex items-center justify-between px-6 bg-white border-b border-gray-200 shadow-sm'>
      <Link to="/">
        <img src={assets.logo_mang} alt='logo' className='h-8 w-auto object-contain'
        
        />

      </Link>
      <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>Hi ! {user ? user.fullName : 'Developer'}</p>
        {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img } />}

      </div>
    </div>
  )
}

export default Navbar