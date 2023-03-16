import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
   <>
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
      </Routes>
    <Footer />
    </HashRouter>
   </>
  );
}

export default App;
