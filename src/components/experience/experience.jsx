import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
    <h5>Habilidades</h5>
    <h2>Experiencias</h2>

    <div className="container experience__container">
    <div className='experience__frontend'>
    <h3>Frontend Developer</h3>
    <div className="experience__content">
    <article className='experience__details'>
    <BsPatchCheckFill className='icons'/>
      <div>
      <h4>HTML</h4>
   <small className='text-light'>Experiencia</small>
   </div>
  </article>
  
<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>CSS</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div> 
<h4>JAVASCRIPT</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>REACT</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>ANGULAR</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>


</div>
</div>
</div>

<div className="container experience__container">
    <div className='experience__backend'>
    <h3>Fotografía</h3>
    <div className="experience__content">
    <article className='experience__details'>
    <BsPatchCheckFill className='icons'/>
   
   <div>
      <h4>RETRATO</h4>
   <small className='text-light'>Experiencia</small>
   </div>
  </article>
  
<article className='experience__details'>
<BsPatchCheckFill className='icons'/>

<div>
<h4>EVENTOS</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>GASTRONOMIA</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>BODAS</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>MODELAJE</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

<article className='experience__details'>
<BsPatchCheckFill className='icons'/>
<div>
<h4>CONCIERTOS</h4>
<small className='text-light'>Experiencia</small>
</div>
</article>

</div>
</div>
</div>

  </section>

  )
}

export default experience