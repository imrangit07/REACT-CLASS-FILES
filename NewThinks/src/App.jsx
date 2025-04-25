import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import UseMemo from './Pages/UseMemo'
import Home from './Pages/Home'
import Reducer from './Pages/Reducer'
import ChangeBg from './Pages/ChangeBg'
import UseRef from './Pages/UseRef'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route path='home' element={<Home/>}/>
      <Route path='usememo' element={<UseMemo/>}/>
      <Route path='reducer' element={<Reducer/>}/>
      <Route path='change' element={<ChangeBg/>}/>
      <Route path='useref' element={<UseRef/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App