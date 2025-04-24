import React, { useEffect, useReducer, useState } from 'react';
import { useRef } from 'react';

const App = () => {
  const [name, setName] = useState()

  // this is for current

  useEffect(() => {
    crtRef.current = crtRef.current + 1;
  })


  // This is for useRef
  const myRef = useRef();

  const ChangeText = () => {
    myRef.current.innerHTML = "This is using useRef";
    myRef.current.style.padding = "25px";
    myRef.current.style.backgroundColor = "pink";
    myRef.current.style.border = "2px solid green";
    myRef.current.style.borderRadius = "10px";

  }
  const ChangeBg = () => {
    myRef.current.innerHTML = "We learn react js";
    myRef.current.style.backgroundColor = "yellow";
    myRef.current.style.borderRadius = "50%";
    myRef.current.style.color = "black";

  }
  const ChangeColor = () => {
    myRef.current.style.color = "red";

  }

  // This is for useRef



  // This is for useReducer
  const crtRef = useRef(0)

  const ReducerMeth = (state, action) => {

    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;

    }

  }

  const [count, dispatch] = useReducer(ReducerMeth, 0)
  // This is for useReducer


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", marginTop: "60px", flexDirection: "column" }}>
      <div>
        <button onClick={ChangeText}>Click</button>
        <button onClick={ChangeBg}>Click</button>
        <button onClick={ChangeColor}>Click</button>
      </div>
    

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px", flexDirection: "column", backgroundColor: "red", color: "white", width: "60%", border: "1px solid balck" }}>
        <h1 ref={myRef}>This is App</h1>

        <input type="text" onChange={(e) => { setName(e.target.value) }} />

        <h1>Current : {crtRef.current}</h1>
      </div>

       {/* // This is for useReducer */}

       <div style={{padding:"40px",backgroundColor:"yellow", width:"80%",color:"black",textAlign:"center"}}>
          <button onClick={() => { dispatch("inc") }}>Increment</button>
          <h1>count : {count}</h1>
          <button onClick={() => { dispatch("dec") }}>Decrement</button>
        </div>
        {/* // This is for useReducer */}
    </div>
  )
}

export default App