import React from 'react'
import './header.css'
import CV from '../../assets/CV.PDF'


const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    
</div>
  )
}

export default CTA