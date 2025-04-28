import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
const Layout = () => {
  return (
    <>
    <Header/>

    <hr />
    
    <Outlet/>
      
    <hr />
    <Footer/>

    </>
  )
}

export default Layout