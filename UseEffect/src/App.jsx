import React from 'react'
import { useState, useEffect } from 'react'



const App = () => {

  let [count, setCount] = useState(0);
  let [mul, setMul] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 2000)
  // })


  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 2000)
  // },[])


  useEffect(() => {
    setMul(count * 2);
  }, [count])


  // This is for form handeling

  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Pass, setPass] = useState("");

  function handelForm() {
    alert(`MY Name is : ${Name}. MY Gmail id is : ${Email} and my password is : ${Pass}`);
  }
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", flexDirection:"column"}}>
    <h1 style={{ color: 'blue', fontSize: '24px' }}>Count is {count}</h1>
    <h1 style={{ color: 'green', fontSize: '24px' }}>Multiplication is {mul}</h1>

    <button 
      onClick={() => setCount(count + 1)}
      style={{ padding: '10px 20px', backgroundColor: 'orange', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}
    >
      Click
    </button>

    <form action="" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', width: '300px' }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Enter your Name:</label>
      <input 
        type="text" 
        id="name" 
        value={Name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Enter your Email:</label>
      <input 
        type="text" 
        id="email" 
        value={Email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <label htmlFor="pass" style={{ display: 'block', marginBottom: '5px' }}>Enter your Password:</label>
      <input 
        type="text" 
        id="pass" 
        value={Pass} 
        onChange={(e) => setPass(e.target.value)} 
        style={{ marginBottom: '15px', padding: '5px', width: '100%' }} 
      />

      <button 
        type="submit" 
        onClick={handelForm}
        style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default App