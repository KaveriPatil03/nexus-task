import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/nexus-task' element={<Home/>}>Home</Route>
      </Routes>
    <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
