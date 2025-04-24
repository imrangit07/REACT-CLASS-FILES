import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
    {/* This is for Home Page */}
    <Route index element={<Home />} />   

    <Route path="home" element={<Home />} />   
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="product" element={<Product />} />
    
    {/* This is for wrong Path */}
    <Route path="*" element={<NotFound />}/>

    </Route>
   </Routes>
   </BrowserRouter>
   
     
    </>
  )
}

export default App
