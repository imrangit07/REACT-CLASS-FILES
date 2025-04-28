import { useMemo, useState } from "react"

const App = () => {
  // const [add,setAdd]=useState(0)
  // const [sub,setSub] = useState(100)
  

  // const mult = useMemo(()=>{
  //   console.log("*******");
  //   for(let i=0;i<1000000000;i++){}
  //   return add*2;
  // },[add])


  const [age,setAge]= useState(0);
  const [name,setName]= useState("");

  const ageMemo = useMemo(()=>{
    for(let i=0;i<1000000000;i++){}
    return age*2
  },[age])


  
  return (
   <>
   {/* <h1>Addition : {add}</h1>
   <button onClick={()=>{setAdd(add+1)}}>Add</button>
   <h1>Substration : {sub}</h1>
   <button onClick={()=>{setSub(sub-1)}}>Sub</button>


   <hr />

   <h1>Multiplication : {mult}</h1> */}

   <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
   Name : 
   <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

   <h1>Age * 2 is : {ageMemo}</h1>
   </>
  )
}

export default App