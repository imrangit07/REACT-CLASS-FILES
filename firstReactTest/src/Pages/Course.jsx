import React, { useState } from 'react'


const Course = () => {
    let [count,setCount]=useState(0);

    const dec = ()=>{
        setCount(count-10)
    }
    const inc = ()=>{
        setCount(count+10)
    }
  return (
   <>
   <button onClick={inc}>Increment</button>

   <h1>Count : {count}</h1>

   <button onClick={dec}>Decrement</button>
   </>
  )
}

export default Course