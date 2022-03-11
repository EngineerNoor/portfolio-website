import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import MyWorks from './Components/MyWorks';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
<div>
     <Navbar color="crimson"/>
     <Home/>
     <About/>
     <MyWorks/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
