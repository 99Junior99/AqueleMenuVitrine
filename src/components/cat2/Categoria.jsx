import React from 'react'
import hamburger from "../../assets/food/vecteezy_hamburger-food-png-generative-ai_27147309.png"

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Categoria.css"

const Categoria = () => {
    return (



        <div className='cat-wrapper'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={32}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollable


            >

                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>lanches</h2>  </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={hamburger} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>  </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default Categoria
