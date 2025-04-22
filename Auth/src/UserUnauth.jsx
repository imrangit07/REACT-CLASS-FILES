import { useContext } from "react";
import { MyContext } from "./UserContext";


const UserUnauth = () => {
    const {user,userLogout} = useContext(MyContext);
  return (
    <>
    <h1>Welcome, {user.userName}</h1>
    <button onClick={()=>{userLogout()}}>Logout</button>
    </>
  )
}

export default UserUnauth