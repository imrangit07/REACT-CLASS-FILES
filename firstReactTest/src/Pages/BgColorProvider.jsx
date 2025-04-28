import { useState, createContext } from 'react';

const BgColorContext = createContext();

const BgColorProvider = ({ children }) => {
    const [bgColor, setBgColor] = useState("white");

    return (
        <BgColorContext.Provider value={{ bgColor, setBgColor }}>
            {children}
        </BgColorContext.Provider>
    );
};

export default BgColorProvider;
export { BgColorContext };
