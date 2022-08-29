import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'



const header = () => {
  return (
    <header>
        <div className="container header__container">
    <h6 className='texto-prin'> Hello I'm</h6>
    <h1>Paola Vargas</h1>
  
    <CTA />
    <HeaderSocials />

    

    <div className="me-face">
        <img src={ME} alt="me" />
       
    </div>

   </div>
</header>
  )
}

export default header