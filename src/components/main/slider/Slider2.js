import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import AOS from "aos"
import "aos/dist/aos.css"
import CardProd from '../card/CardProd';

export default function Slider2() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

    const arr = [
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
        { id: 1, name: "img1" },
    ]

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 480px
                    770: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    996: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    1404: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
            >
                {
                    arr.map((item, index) => (
                        <SwiperSlide>
                            <CardProd />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
            {/* <div className="border border-primary rounded position-relative vesitable-item">
                <div className="vesitable-img">
                    <img src={'/images/best-product-1.jpg'} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: 10, right: 10 }} >Vegetable</div>
                <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i
                            className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                    </div>
                </div>
            </div> */}
        </>
    )
}
