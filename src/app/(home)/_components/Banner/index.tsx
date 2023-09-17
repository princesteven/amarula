'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@styles/sliders.css'
import React from 'react';
import Slider from "./Slider";
import {sliders} from "../../_db/sliders";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

/**
 * @function
 * @name Banner
 * @description Renders the slider in the home page.
 * @author Prince Steven
 */
const Banner = () => {
    const renderSlider = sliders.map((slider, index) => <SwiperSlide
        key={`swiper-slide-${index}`}
    >
        <Slider
            image={slider.image}
            classes={slider.className}
            link={slider.link}
            btnText={slider['btn-text']}
            animation={slider.animation}
            subtitle={slider.subtitle}
            title={slider.title}
        />
    </SwiperSlide>)

    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            speed={800}
            grabCursor={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
                // bulletClass: 'bg-white'
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {renderSlider}
        </Swiper>
    )
};

export default Banner;