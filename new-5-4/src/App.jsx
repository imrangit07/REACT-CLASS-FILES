import axios from 'axios';
import React, { useState } from 'react'

const App = () => {

  let [input, setInput] = useState({});

  function handelFormInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setInput(values =>({...values,[name]:value}));

    console.log(input);
    

  }
  
const handelSubmit= async(e)=>{
  
  const url = "http://localhost:3000/person";
  let res = await axios.post(url,input)

  console.log(res);
  
 }

  // axios
  return (
   <>
     <form action="" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Enter your Name:</label>
      <input 
        type="text" 
        id="name" 
        name='name'
        onChange={handelFormInput} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Enter your Email:</label>
      <input 
        type="text" 
        id="email" 
        name='email'
        onChange={handelFormInput} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <label htmlFor="pass" style={{ display: 'block', marginBottom: '5px' }}>Enter your Password:</label>
      <input 
        type="text" 
        id="pass" 
        name='password'
        onChange={handelFormInput} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <button 
        type="submit" 
        onClick={handelSubmit}
        style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </form>
   </>
  )
}

export default App