import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />} >

    <Route path='Home' element={<Home />} />
    <Route path='About' element={<About />} />
    <Route path="Contact" element={<Contact />} />

    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;