import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Update = () => {
 let [myData,setMyData] = useState([]);
const navigate = useNavigate();
 const LoadData= async()=>{
    const res = await axios.get("http://localhost:3000/person");
    console.log(res.data);
    setMyData(res.data)
 }

 useEffect(()=>{
   LoadData()
 },[]);

 const DeleteData = async(id)=>{
    await axios.delete(`http://localhost:3000/person/${id}`);
    LoadData();
    alert("Data Deleted Successfuly!")
 }
 const EditData =(id)=>{
    navigate(`/edit/${id}`);
 }

const personData =myData.map((key)=>{
    return(
        <>
        <tr >
            <td style={{ border: '1px solid black' }}>{key.Name}</td>
            <td style={{ border: '1px solid black' }}>{key.Email}</td>
            <td style={{ border: '1px solid black' }}>{key.Age}</td>
            <td style={{ border: '1px solid black' }} onClick={()=>{DeleteData(key.id)}}>delete</td>
            <td style={{ border: '1px solid black' }} onClick={()=>{EditData(key.id)}}>update</td>
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
            <th style={{ border: '1px solid black' }}>Delete</th>
            <th style={{ border: '1px solid black' }}>Update</th>
        </tr>
    </thead>
    <tbody>
        {personData}
    </tbody>
    </table>
    </>
  )
}

export default Update