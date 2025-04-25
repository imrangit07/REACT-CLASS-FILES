import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(100);

    const inc = () => {
        setAdd(add + 10)
    }
    const dec = () => {
        setSub(sub - 10)
    }

    const mult = useMemo(() => {
        console.log("*******");
        return add * 10;
    }, [add])


    return (
        <>
            <h1>Count is : {add}</h1>
            <button onClick={inc}>Increment</button>

            <h1>Count is : {sub}</h1>

            <button onClick={dec}>Decrement</button>


            <h1></h1>
            <h1>Mul : {mult}</h1>
        </>
    )
}

export default UseMemo