import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({name}) => {
  return (
   <>
    <div>Comp 1</div>
    <Comp2 name={name} />
   </>
  )
}

export default Comp1