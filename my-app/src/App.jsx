import React,{ useState } from 'react'

import { Route,Routes } from 'react-router-dom'
import './App.css'
import ExercisePage from './pages/ExercisePage'
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from './pages/Navbar';
function App() {
  
  return (
    <>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/exersices" element={<ExercisePage />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
