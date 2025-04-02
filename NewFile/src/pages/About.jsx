import React from 'react'

const noOne = { width:"100%",display:"flex",alignItems:"center", justifyContent:"center", borderRadius:"20px"};
const noTwo = {backgroundColor:"red", padding:"50px", width:"500px", borderRadius:"50px"};
const noThree= {backgroundColor:"green", padding:"50px",borderRadius:"50px"};
const noFour= {backgroundColor:"yellow", padding:"50px", borderRadius:"50px", textAlign:"center"};

const About = () => {
  return (
    <div style={noOne}>
    <div style={noTwo}>
    <div style={noThree}>
      <div style={noFour}>
      <h1 style={ {color:"black", textDecoration:"underline", borderRadius:"50px"}}>About</h1>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About;
