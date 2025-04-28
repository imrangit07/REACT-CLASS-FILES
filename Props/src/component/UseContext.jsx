import React, { useState } from 'react'
import { createContext } from 'react';

const secondContext = createContext()
const UseContext = ({ children }) => {
    const [user,setUser] = useState("User Imran");
    return (
        <>
            <secondContext.Provider value={{user}} >
                {children}
            </secondContext.Provider>
        </>
    )
}

export default UseContext
export {secondContext};