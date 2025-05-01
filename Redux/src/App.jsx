import React from 'react'
import { increment,decrement,changeName } from './countSlice'
import { useSelector,useDispatch } from 'react-redux'
import ChangeColor from './ChangeColor';


const App = () => {
  const myCount = useSelector(state=>state.myCount.count); 
  const myName = useSelector(state=>state.myCount.name); 
  const dispatch = useDispatch();
  return (
    <>
    <h1>MY Counter App</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <h1>{myCount}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>

    <h1>Nmae is : {myName}</h1>

    <button onClick={()=>{dispatch(changeName())}}>Change Name</button>

    <ChangeColor />
    </>
  )
}

export default App