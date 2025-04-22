import { useContext, useState } from "react"
import { MyContext } from "./UserContext"

const UserAuth = () => {
    const {userLogin} = useContext(MyContext);

    const [inputData,setInputData] = useState("");
    
    
  return (
    <>
    Enter Name : <input type="text" value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>

    <button onClick={()=>{userLogin(inputData)}}>Login</button>
    </>
  )
}

export default UserAuth