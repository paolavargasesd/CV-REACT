import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/video/video.mp4'
import AVTR2 from '../../assets/video/santipao.mp4'

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
    },
{
    avatar: AVTR2,
},
]
const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>REPRODUCE</h5>
       

        <Swiper className="container testimonials__container"

        modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true}}>
        {
            data.map(({avatar,name,review}, index) => {
                return(
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                        <video width={700} src={avatar} controls/>
    
                        </div>
                        <h5 className='client__name'>{name}</h5>
                        <small className='client__review'>{review}</small>
                    </SwiperSlide>
                )
            })
        }

        </Swiper>
        
    </section>
  )
}

export default testimonials