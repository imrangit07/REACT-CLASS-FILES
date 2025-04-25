import React from 'react'
import { useContext,useRef } from 'react'
import { Bgcontext } from '../BgProvider'

const ChangeBg = () => {
    const {bgColor,setBgColor} = useContext(Bgcontext);

    const btnStyle = {
      padding:"10px 20px",
      fontSize:"20px",
      borderRadius:"10px",
      fontWeight:"700",
    };
  return ( 
    <div style={{width:"100%",height:"100vh", backgroundColor:`${bgColor}`,display:'flex',alignItems:'center',justifyContent:'center',padding:"20px"}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:"wrap",gap:"20px"}}>
        <button style={btnStyle} onClick={()=>{setBgColor("red")}}>Red</button>
        <button style={btnStyle} onClick={()=>{setBgColor("green")}}>Green</button>
        <button style={btnStyle} onClick={()=>{setBgColor("blue")}}>Blue</button>
        <button style={btnStyle} onClick={()=>{setBgColor("yellow")}}>Yellow</button>
        <button style={btnStyle} onClick={()=>{setBgColor("purple")}}>Purple</button>
        <button style={btnStyle} onClick={()=>{setBgColor("orange")}}>Orange</button>
        <button style={btnStyle} onClick={()=>{setBgColor("pink")}}>Pink</button>
        <button style={btnStyle} onClick={()=>{setBgColor("brown")}}>Brown</button>
        <button style={btnStyle} onClick={()=>{setBgColor("gray")}}>Gray</button>
        <button style={btnStyle} onClick={()=>{setBgColor("cyan")}}>Cyan</button>
        <button style={btnStyle} onClick={()=>{setBgColor("magenta")}}>Magenta</button>
        <button style={btnStyle} onClick={()=>{setBgColor("teal")}}>Teal</button>
        </div>
    </div>

    
  )
}

export default ChangeBg