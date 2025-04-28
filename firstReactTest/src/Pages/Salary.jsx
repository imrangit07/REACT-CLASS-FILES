import React, { useState } from 'react'

const Salary = () => {
    const [ta, setTa] = useState("")
    const [da, setDa] = useState("")
    const [hra, setHra] = useState("")
    const [tax, setTax] = useState(0)

    const Tax = () => {
        let salary = parseInt(ta) + parseInt(da) + parseInt(hra);

        if (salary >= 80000) {
            setTax((salary * 20) / 100);
        } else if (salary >= 50000) {
            setTax((salary * 15) / 100);
        } else if (salary >= 30000) {
            setTax((salary * 10) / 100);
        } else if (salary >= 3000) {
            setTax(0);
        }
        console.log(tax);



    }
    return (
        <>
            Enter TA:
            <input type="text" value={ta} onChange={(e) => { setTa(e.target.value) }} />
            Enter DA:
            <input type="text" value={da} onChange={(e) => { setDa(e.target.value) }} />
            Enter HRA:
            <input type="text" value={hra} onChange={(e) => { setHra(e.target.value) }} />

            <button onClick={Tax}>Tax</button>

            <div className="calculat">
                {tax}
            </div>
        </>
    )
}

export default Salary