import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiEnvelope } from 'react-icons/bi';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav className='nav'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#section-about" onClick={()=> setActiveNav('#section-about')} className={activeNav === '#section-about' ? 'active' : ''}><AiOutlineUser /></a>  
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiEnvelope /></a>
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><BiBook /></a>  

    </nav>
  )
}

export default Nav;

