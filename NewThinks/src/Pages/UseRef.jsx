import { useRef } from "react"

const UseRef = () => {

    const myRef = useRef();

    const changeColor = ()=>{
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        
        myRef.current.style.width="100%";
        myRef.current.style.padding="20px";
        myRef.current.style.fontSize="40px";
        myRef.current.style.textAlign="center";
        
        myRef.current.style.color=`${randomColor}`;
    }
    const changeBgColor = ()=>{
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        myRef.current.style.backgroundColor=`${randomColor}`;
    }

    const btnStyle = {
        padding:"10px 20px",
        fontSize:"20px",
        borderRadius:"10px",
        fontWeight:"700",
        marginLeft:'20px'
      };
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <h1 ref={myRef}>This is Using UseRef</h1>

   <div>
   <button style={btnStyle} onClick={changeColor}>Color</button>
   <button style={btnStyle} onClick={changeBgColor}>BgColor</button>
   </div>
    </div>
  )
}

export default UseRef