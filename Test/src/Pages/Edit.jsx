import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {

    let [userData,setUserData] = useState({})
    const {id} = useParams()
    console.log(id);

    const LoadData = async()=>{
        let res = await axios.get(`http://localhost:3000/person/${id}`);
        console.log(res.data);

        setUserData(res.data)
    }

    useEffect(()=>{
        LoadData()
    },[]);


    const handelInput = (e)=>{
        let Name = e.target.name;
        let Value = e.target.value;
        setUserData(value =>({...value,[Name]:Value}))
        
      }
    
      
    const handelSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3000/person/${id}`,userData)
        alert("Data Updated Successfuly!") 
    }
  return (
     <>
    <form action="">
        Name: 
        <input type="text" placeholder='Enter Your Name' name='Name' value={userData.Name} onChange={handelInput} /><br/><br/>
        Email:
        <input type="email" placeholder='Enter Your Email' name='Email' value={userData.Email} onChange={handelInput} /><br/><br/>
        Age:
        <input type="text" placeholder='Enter Your Age' name='Age' value={userData.Age} onChange={handelInput} /><br/><br/>

        <button type='submit' onClick={handelSubmit}>submit</button>
    </form>
    </>
  )
}

export default Edit