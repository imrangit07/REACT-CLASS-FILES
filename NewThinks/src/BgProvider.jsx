import React, { useState } from 'react'
import { createContext } from 'react'

const Bgcontext = createContext();

const BgProvider = ({children}) => {
    const [bgColor,setBgColor] = useState("lightgreen");

  return (
    <>
    <Bgcontext.Provider value={{bgColor,setBgColor}}>
        {children}
    </Bgcontext.Provider>
    </>
  )
}

export default BgProvider
export {Bgcontext};