import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

import './slider.css'

export default function Slider1() {
    const swiper = useSwiper()
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                // onAutoplayTimeLeft
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
                <SwiperSlide><img src={'/images/hero-img-1.png'} /></SwiperSlide>
                <SwiperSlide><img src={'/images/hero-img-2.jpg'} /></SwiperSlide>

            </Swiper>
        </>
    )
}
