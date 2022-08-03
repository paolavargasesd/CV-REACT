import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer>
      <div className="footer__socials">
      <a href="https://www.instagram.com/pauvargas03/"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>
      <a href="https://www.facebook.com/Paolavargasesd2"><FaFacebookF/></a>


      </div>
      <div className="footer__copyright">
     <small>&copy; Paola Vargas</small>
      </div>
   </footer>
  )
}

export default footer