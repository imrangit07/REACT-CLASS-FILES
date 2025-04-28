import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Facuilty from './Pages/Facuilty';
import Course from './Pages/course';
import Contact from './Pages/Contact';
import Salary from './Pages/Salary';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/facuilty' element={<Facuilty/>} />
      <Route path='/courses' element={<Course/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/salary' element={<Salary/>} />
    

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App