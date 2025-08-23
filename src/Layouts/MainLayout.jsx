import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.jsx'
import BackToTop from '../components/BackToTop/BackToTop.jsx'

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
      <BackToTop/>
    </div>
  )
}
