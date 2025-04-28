import { myContext } from './ContextApi'
import { useContext } from 'react'

const App = () => {
  const {color,setColor} = useContext(myContext);
  
  
  return (
    <>
    <div style={{width:"100%",height:"100vh", backgroundColor:`${color}`}}>
      <h1>This is home page</h1>
     <button onClick={()=>{setColor("green")}}>green</button>
     <button onClick={()=>{setColor("orange")}}>orange</button>
     <button onClick={()=>{setColor("yellow")}}>yellow</button>
    </div>
    </>
  )
}

export default App