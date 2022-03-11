import React from 'react'
import './Navbar.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
export default function Navbar(props) {
  return (
     <div>
       <nav>
         <div className="logo" >Portfo<span>lio</span></div>
         <input type="checkbox" id="click"/>
         <label  htmlFor="click"> <DensityMediumIcon className='menu'/></label>
         <ul>
           <li><a href="#home" >Home</a></li>
           <li><a href="#about" >About</a></li>
           <li><a href="#myworks" >MyWork</a></li>
           <li><a href="#skill" >Skill</a></li>
           <li><a href="#contact" >Contact</a></li>
         </ul>
       </nav>
     </div>
       
  )
}
