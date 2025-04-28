import React, { useContext } from 'react'
import Comp3 from './Comp3'
import { secondContext } from './UseContext'


const Comp2 = ({name}) => {
  const {user} = useContext(secondContext);
  return (
    <>
    <div>Comp2 {user}</div>
    <Comp3 name={name} />
    </>
  )
}

export default Comp2