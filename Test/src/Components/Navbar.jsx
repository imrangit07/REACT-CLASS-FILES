import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <Link to="home" >Home</Link>  |
   <Link to="insert" >Insert</Link>  |
   <Link to="display" >Display</Link>  |
   <Link to="search" >Search</Link>  |
   {/* <Link to="edit" >Edit</Link>  | */}
   <Link to="update" >Update</Link>  
   </>
  )
}

export default Navbar