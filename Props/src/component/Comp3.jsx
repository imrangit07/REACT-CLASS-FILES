import React from 'react'
import Comp4 from './Comp4'
const Comp3 = ({children}) => {
  return (
    <>
    <div style={{color:"red", fontSize:"20px",backgroundColor:"yellow"}}>Comp3</div>
    {children}
    {/* <Comp4 name={name} /> */}
    </>
  )
}

export default Comp3