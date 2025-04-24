
import {useState, createContext } from 'react'

const UserContext = createContext();

const ContextApi = ({children}) => {
    let [name, setName] = useState("Imran Hussain");
    return (
        <>
            <UserContext.Provider value={{name,setName}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default ContextApi;
export {UserContext}


