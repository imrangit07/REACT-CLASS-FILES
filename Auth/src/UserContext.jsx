
import { createContext, useState } from 'react'

const MyContext = createContext()

const UserContext = ({children}) => {
    const [user,setUser] = useState({userName:"",userAuth:false});

    const userLogin = (name)=>{
        setUser({userName:name,userAuth:true});
    }
    const userLogout= ()=>{
        setUser({userName:"",userAuth:false});
    }
  return (
   <>
   <MyContext.Provider value={{user,userLogin,userLogout}}>
    {children}
   </MyContext.Provider>
   </>
  )
}

export default UserContext;
export {MyContext};