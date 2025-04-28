import { BgColorContext } from './BgColorProvider';
import { useContext } from 'react';



const Home = () => {
  const { bgColor, setBgColor } = useContext(BgColorContext);

  return (
      <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
          <h1>This is Home Page</h1>
          <h1>Change Background Color</h1>
          <button onClick={() => setBgColor("red")}>Red</button>
          <button onClick={() => setBgColor("green")}>Green</button>
      </div>
  
  )
}

export default Home