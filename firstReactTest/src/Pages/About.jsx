import axios from 'axios';
import React, { useEffect, useState } from 'react'


const About = () => {
    const [myData, setMyData] = useState([]);

    const LoadData = async () => {
        const res = await axios.get("http://localhost:3000/employee");

        setMyData(res.data)
    }

    useEffect(() => {
        LoadData();
    }, [])


    const printData = myData.map((item)=>{
        return(
            <>
            <tr key={item.id}>
                <td style={{border:"1px solid black"}}>{item.id}</td>
                <td style={{border:"1px solid black"}}>{item.name}</td>
                <td style={{border:"1px solid black"}}>{item.designation}</td>
                <td style={{border:"1px solid black"}}>{item.department}</td>
                <td style={{border:"1px solid black"}}>{item.salary}</td>
            </tr>
            </>
        )
    })
    return (
        <>
        <table style={{border:"1px solid black"}} >
            <thead>
                <tr >
                    <th style={{border:"1px solid black"}}>Emp id</th>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>Designation</th>
                    <th style={{border:"1px solid black"}}>Department</th>
                    <th style={{border:"1px solid black"}}>Salary</th>
                </tr>
            </thead>
            <tbody>
                {printData}
            </tbody>
        </table>

        </>
    )
}

export default About