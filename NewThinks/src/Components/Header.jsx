import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <Link to="home" >Home</Link> |
    <Link to="usememo" >UseMemo</Link> |
    <Link to="reducer" >Reducer</Link> |
    <Link to="change" >ChangeBg</Link> |
    <Link to="useref" >UseRef</Link> |
    </>
  )
}

export default Header