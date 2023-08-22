import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';


function App() {
  return (
    <div>
   <Router >
   
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
    </Routes>
   
   </Router>
   </div>
  );
}

export default App;
