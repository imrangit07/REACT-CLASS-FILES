import React from 'react'
import Comp5 from './Comp5'
import { myContext } from '../App'
import { useContext } from 'react'

const Comp4 = () => {

  const {name} = useContext(myContext)
  return (
    <>
    <div style={{color:"red", fontSize:"20px",backgroundColor:"green"}}>Comp4 {name}</div>
        {/* <Comp5 name={name} /> */}
    </>

  )
}

export default Comp4