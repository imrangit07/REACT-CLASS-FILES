import React, { useContext } from 'react'
import { UserContext } from './ContextApi';

const UserData = () => {
  const { name, setName } = useContext(UserContext);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign:'center'
     }}>
      <h1 style={{ color: '#333',backgroundColor:"#313131", color:"white"}}>This is User Data</h1>
      <h2 style={{ color: '#555' }}>User Name is: <span style={{ fontWeight: 'bold' }}>{name}</span></h2>
      <button 
        onClick={() => setName("Arman Hussani")} 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Change Name
      </button>
    </div>
  )
}

export default UserData;
