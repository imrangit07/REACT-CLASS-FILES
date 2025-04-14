import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import PostData from './PostData';
import Display from './Display';
import NotFound from './NotFound';
import Update from './Update';
import Search from './Search';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* This is for Home Page */}
            <Route index element={<Home />} />

            <Route path="home" element={<Home />} />
            <Route path="post" element={<PostData />} />
            <Route path="display" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />

            {/* This is for wrong Path */}
            <Route path="*" element={<NotFound />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App