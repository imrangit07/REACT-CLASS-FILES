
import { createContext, useState } from 'react'

const myContext = createContext();

const ContextApi = ({ children }) => {
    const [color, setColor] = useState("red")
    return (
        <>
            <myContext.Provider value={{ color, setColor }} >
                {children}
            </myContext.Provider>
        </>
    )
}

export default ContextApi
export {myContext}