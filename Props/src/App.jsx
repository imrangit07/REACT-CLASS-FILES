import { useState,createContext } from "react"
import Comp1 from "./component/comp1"
import Comp4 from "./component/Comp4";
import Comp3 from "./component/Comp3";
import Obj from "./Obj"


const myContext = createContext();
// const myDetail ={
//   myName:"imran",
//   age:23,
//   subject:"javaScript"
// }

function App() {

  const [name,setName] = useState("Imran")
  return (
    <>
     {/* <Obj name={myDetail.myName} age={myDetail.age} subject={myDetail.subject} /> */}
     <h1>Welcome {name}</h1>

     <Comp3 >
     <h2>This is from children</h2>
     </Comp3>
     {/* This is for pros drealing */}
     <myContext.Provider value={{name}}>
      <Comp4 />
     </myContext.Provider>

    {/* <Comp1 name={name} /> */}
    {/* <Comp1/> */}
    </>
  )
}

export default App
export {myContext};