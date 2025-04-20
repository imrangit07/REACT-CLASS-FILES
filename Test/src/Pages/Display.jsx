import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Display = () => {
 let [myData,setMyData] = useState([]);

 const LoadData= async()=>{
    const res = await axios.get("http://localhost:3000/person");
    console.log(res.data);
    setMyData(res.data)
 }

 useEffect(()=>{
   LoadData()
 },[])

const personData =myData.map((key)=>{
    return(
        <>
        <tr >
            <td style={{ border: '1px solid black' }}>{key.Name}</td>
            <td style={{ border: '1px solid black' }}>{key.Email}</td>
            <td style={{ border: '1px solid black' }}>{key.Age}</td>
        </tr>
        </>
    )
}) 

  return (
    <>
    <table style={{ 
        border:"1px solid black"
      }}>
    <thead>
        <tr  >
            <th style={{ border:"1px solid black"}}>Name</th>
            <th style={{ border: '1px solid black' }}>Email</th>
            <th style={{ border: '1px solid black' }}>Age</th>
        </tr>
    </thead>
    <tbody>
        {personData}
    </tbody>
    </table>
    </>
  )
}

export default Display