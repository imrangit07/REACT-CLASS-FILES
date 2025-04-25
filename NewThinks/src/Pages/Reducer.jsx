import { useReducer } from "react"

const Reducer = () => {

  const reducerMethord = (state,action)=>{
     switch(action){
      case "inc":
        return state+10;
      case "dec":
        return state-10;
      default:
        return state;

     }
  }

  const [start,dispatch] = useReducer(reducerMethord,0);

  return (
   <>
   <button onClick={()=>{dispatch("inc")}}>Increment</button>
   <h1>Start is : {start}</h1>
   <button onClick={()=>{dispatch("dec")}}>Decrement</button>
   
   </>
  )
}

export default Reducer