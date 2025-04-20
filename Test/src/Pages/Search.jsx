import React, {useState } from 'react'
import axios from 'axios'

const Search = () => {
 const [myData,setMyData] = useState("");
 const [searchData,setSearchData] = useState([])

console.log(myData);

 const SearchData = async()=>{
    const res = await axios.get(`http://localhost:3000/person/?Name=${myData}`)
    console.log(res.data);
    setSearchData(res.data)
    
 }


const personData =searchData.map((key)=>{
    return(
        <>
         <h1>Name is : {key.Name}</h1>
         <h2>Emial is : {key.Email}</h2>
         <h2>Age is : {key.Age}</h2>
        </>
    )
}) 

  return (
    <>
     <h1>Search by Name</h1>
     Person Name: <input type="text" value={myData} onChange={(e)=>{setMyData(e.target.value)}} />
     <button type='submit' onClick={SearchData}>Search</button>

     <div className="searchData">
        {personData}
     </div>
    </>
  )
}

export default Search