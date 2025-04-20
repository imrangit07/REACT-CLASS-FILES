import React, { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [userInput,setUserInput] = useState({})
    const handelInput = (e)=>{
      let Name = e.target.name;
      let Value = e.target.value;
      setUserInput(value =>({...value,[Name]:Value}))
      console.log(userInput);
    }

    const handelSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3000/person",userInput);

        setUserInput({
            "Name":"",
            "Email":"",
            "Age":""
        })
        alert("Data Submited Successfuly!")
    }
  return (
    <>
    <form action="">
        Name: 
        <input type="text" placeholder='Enter Your Name' name='Name' value={userInput.Name} onChange={handelInput} /><br/><br/>
        Email:
        <input type="email" placeholder='Enter Your Email' name='Email' value={userInput.Email} onChange={handelInput} /><br/><br/>
        Age:
        <input type="text" placeholder='Enter Your Age' name='Age' value={userInput.Age} onChange={handelInput} /><br/><br/>

        <button type='submit' onClick={handelSubmit}>submit</button>
    </form>
    </>
  )
}

export default Insert