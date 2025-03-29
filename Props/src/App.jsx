import Obj from "./Obj"

const myDetail ={
  myName:"imran",
  age:23,
  subject:"javaScript"
}

function App() {
  return (
    <>
     <Obj name={myDetail.myName} age={myDetail.age} subject={myDetail.subject} />
    </>
  )
}

export default App
