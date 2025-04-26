import React, { useEffect, useState } from 'react'

const App = () => {
  const [password,setPassword] = useState("Imran");
  const [length,setLength] = useState(6);
  const [number,setNumber] = useState(false);


  const generatPassword = ()=>{
    const str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let pass = ''
    for(let i=1;i<=length;i++){
      const char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char)
      setPassword(pass)
    }

  }
  useEffect(()=>{
    generatPassword();
  },[length,number])

  return (
   <>
   <h1>Password Generator</h1>
   <input type="text" value={password} />
   <input type="range" max={20} min={6} onClick={(e)=>setLength(e.target.value)}/>
   <label >Range is: {length}</label>
   <input type="checkbox"/>Number
   </>
  )
}

export default App