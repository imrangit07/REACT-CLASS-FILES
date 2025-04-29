import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incByNumber } from './Slice/CountSlice'

const App = () => {

  const [input, setInput] = useState(0)

  const count = useSelector((state) => state.counter.Value);
  const dispatch = useDispatch()

  function HandelIncClick() {
    dispatch(increment())
  }

  function HandelDecClick() {
    dispatch(decrement())
  }

  return (
    <div style={{
      width:'100%',
      height:"100vh",
      display:'flex',
      alignItems:"center",
      justifyContent:'center'}}>
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px'
      }}>Counter is : {count}</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={HandelIncClick}
          style={{
            padding: '8px 16px',
            margin: '0 5px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >Increment</button>
        
        <button 
          onClick={HandelDecClick}
          style={{
            padding: '8px 16px',
            margin: '0 5px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >Decrement</button>
        
        <button 
          onClick={() => dispatch(reset())}
          style={{
            padding: '8px 16px',
            margin: '0 5px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >Reset</button>
      </div>
      
      <div>
        <input 
          type="number" 
          value={input} 
          placeholder='Enter any Number' 
          onChange={(e) => { setInput(e.target.value) }} 
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        />
        
        <button 
          onClick={() => dispatch(incByNumber(input))}
          style={{
            padding: '8px 16px',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >Add</button>
      </div>
    </div>
    </div>
  )
}

export default App