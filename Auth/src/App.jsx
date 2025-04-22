import UserAuth from "./UserAuth";
import UserUnauth from "./UserUnauth";
import { useContext } from "react";
import { MyContext } from "./UserContext";

const App = () => {

const {user} = useContext(MyContext);
  return (
   <>
   <h1>Login System</h1>
   {!user.userAuth?<UserAuth/>:<UserUnauth/>}
   </>
  )
}

export default App