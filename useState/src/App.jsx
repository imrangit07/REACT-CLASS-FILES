import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'
import { useState } from 'react'

const App = () => {

  let [name, setName] = useState("Manish");
  let [color, setColor] = useState("Red");
  let [count,setCount] = useState(0);

  function IncrementCount(){
    setCount(count+1);
  }
  function DecrementCount(){
    if(count>1){
      setCount(count-1);
    }else{
      alert("always count value is greater then 0")
    }
  }
  function ResetCoutn(){
    setCount(0)
  }


  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100vw", height:"100vh"}}>
      {/* <h1 style={{color:color}}>Name is : {name}</h1>

     
      <button onClick={()=>{setName("Imran")}}>Change Name</button>

      <h1 style={{color:color}}>Color is : {color}</h1>

      <button onClick={()=>{setColor("Green")}}>Green</button>
      <button onClick={()=>{setColor("yellow")}}>Yellow </button>
      <button onClick={()=>{setColor("orange")}}>orange</button> */}


      

      {/* <button onClick={IncrementCount}>+</button>
      <button onClick={ResetCoutn}>Reset</button>
      <button onClick={DecrementCount}>-</button> */}


      <Card style={{width: '30rem', background:"yellow",display:"flex", alignItems:"center", justifyContent:"center",padding:"10px 20px", border:"2px solid red",textAlign:"center",boxShadow:"0 0 5px 2px green"}}>
      <Card.Body>
      <h1 style={{color:"black", marginBottom:"20px",fontWeight:"700"}}>Number is : {count}</h1>

        <Button onClick={DecrementCount} style={{background:"green", marginLeft:"5px", marginRight:"5px"}}>Decrement</Button>

        <Button onClick={ResetCoutn}>Reset</Button>

        <Button onClick={IncrementCount} style={{background:"green", marginLeft:"5px", marginRight:"5px"}}>Increment</Button>

      </Card.Body>
    </Card>
  

     
    </div>
  )
}

export default App