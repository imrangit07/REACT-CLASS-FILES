import React from 'react'
import { changebg } from './countSlice';
import { useSelector, useDispatch } from 'react-redux';

const ChangeColor = () => {
  const changeColor = useSelector(state => state.myCount.color);
  const dispatch = useDispatch();

  console.log(changeColor);

  return (
    <div style={{ backgroundColor: changeColor, color: "White" }}>

      <button onClick={() => { dispatch(changebg()) }}>Change Color</button>
    </div>
  )
}

export default ChangeColor