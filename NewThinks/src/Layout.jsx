import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <hr />

      <Outlet />

      <hr />

      <h1>This is Footer</h1>
    </>
  )
}

export default Layout