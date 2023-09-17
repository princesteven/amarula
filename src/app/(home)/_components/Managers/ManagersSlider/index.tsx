'use client';

import React from 'react';
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {managers} from "../../../_db/management";
import {Autoplay, Navigation} from "swiper/modules";

/**
 * @function
 * @name ManagementSlider
 * @description Slider for showing amarula management
 * @author Prince Erick Steven
 */
const ManagementSlider = () => {
    return (
        <div className="w-11/12 md:w-5/4 lg:w-3/4 mx-auto">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={800}
                grabCursor={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation]}
            >
                {managers.map((manager) => <SwiperSlide key={Math.random()}>
                    <div className="w-full">
                        <Image
                            src={manager.image}
                            alt={manager.imageDescription}
                            style={{
                                width: '100%',
                                height: '300px'
                            }}
                        />
                        <div className="border-t px-3 py-5 bg-white">
                            <div className="flex justify-between">
                                <div className={"uppercase font-semibold"}>{manager.name}</div>
                                <div className="flex text-amber-500 text-sm">{manager.title}</div>
                            </div>
                            <div className={"font-thin text-black/40 pt-3 text-sm"}>{manager.description}</div>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
};

export default ManagementSlider;