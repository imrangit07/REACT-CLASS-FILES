import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Link to='home' >Home</Link>  |
    <Link to='about' >About</Link>  |
    <Link to='facuilty' >Facuilty</Link>  |
    <Link to='courses' >Our Courses</Link>  |
    <Link to='contact' >Contact Us</Link>  |
    <Link to='salary' >Salary</Link>  |
    {/* <Link to='change' >Change BG</Link>   */}
    </>
  )
}

export default Header