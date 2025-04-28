
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Facuilty = () => {
    const [myData, setMyData] = useState([]);

    const postData = async () => {
        const res = await axios.post("http://localhost:3000/employee",myData);

        setMyData(
          {
            "emp_id":"",
            "name":"",
            "designation":"",
            "department":"",
            "salary":""
          }
        )
    }


    const handelInput = (e)=>{
      e.preventDefault();
      const Name = e.target.name;
      const Value = e.target.value;

      setMyData(value=>({...value,[Name]:Value}))
    }

    
    return (
        <>
         Emp Id :
         <input type="text" name='emp_id'
         value={myData.emp_id} onChange={handelInput}/><br /><br />

         Name :
         <input type="text" name='name' value={myData.name} onChange={handelInput}/><br /><br />
         designation :
         <input type="text" name='designation' value={myData.designation} onChange={handelInput}/><br /><br />
         department :
         <input type="text" name='department' value={myData.department}  onChange={handelInput}/><br /><br />
         salary :
         <input type="text" name='salary'
         value={myData.salary} onChange={handelInput}/><br /><br />
         
        
        <button onClick={postData}>Submit</button>
        </>
    )
}

export default Facuilty