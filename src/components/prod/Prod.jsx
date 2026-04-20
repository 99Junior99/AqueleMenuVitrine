import React from 'react'
import "./Prod.css"
import food1 from "../../assets/food/vecteezy_hamburger-food-png-generative-ai_27147309.png"
import food2 from "../../assets/food/ChatGPT Image 19 de abr. de 2026, 12_16_23.png"
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Prod = () => {
    return (
        <div class='prod'>
            <Swiper className='left'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={32}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                <SwiperSlide>
                    <div className="card-2">
                        <img className='i' src={food1} alt="" />


                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="card-2">
                        <img src={food2} className='i' alt="" />


                    </div>

                </SwiperSlide>
            </Swiper>

            <div className='right'>
                <h2 className='title'>Carne de sol</h2>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, at!</p>
            </div>
        </div>
    )
}

export default Prod

