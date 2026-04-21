import React from 'react'
import hamburger from "../../assets/food/vecteezy_hamburger-food-png-generative-ai_27147309.png"
import feijoada from "../../assets/food/ChatGPT Image 19 de abr. de 2026, 12_16_23.png"
import milkshake from "../../assets/food/coquetel-de-morango-com-creme-na-mesa.png"
import bife from '../../assets/food/ChatGPT Image 20 de abr. de 2026, 19_34_46.png'
import mistoquente from '../../assets/food/ChatGPT Image 20 de abr. de 2026, 19_39_28.png'
import bolo from '../../assets/food/ChatGPT Image 20 de abr. de 2026, 19_41_19.png'

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
                        <img src={feijoada} alt="First slide" />
                        <div className='text'><h2>almoços</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={milkshake} alt="First slide" />
                        <div className='text'><h2>bebidas</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={bife} alt="First slide" />
                        <div className='text'><h2>Carnes</h2>  </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={bolo} alt="First slide" />
                        <div className='text'><h2>Sobremesas</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='cat2' >
                        <img src={mistoquente} alt="First slide" />
                        <div className='text'><h2>Café da manhã</h2>  </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default Categoria
