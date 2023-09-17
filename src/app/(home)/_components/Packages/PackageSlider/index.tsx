'use client';

import React from 'react';
import Image from "next/image";
import {AiFillStar} from 'react-icons/ai';
import {packages} from "../../_db/packages";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const GridSlider = () => {
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
                {packages.map((amarulaPackage) => <SwiperSlide key={Math.random()}>
                    <div className="w-full">
                        <Image
                            src={amarulaPackage.image}
                            alt={amarulaPackage.imageDescription}
                            style={{
                                width: '100%',
                                height: '300px'
                            }}
                        />
                        <div className="border-t px-3 py-5 bg-white">
                            <div className="font-medium flex justify-between">
                                <div className={"uppercase"}>{amarulaPackage.name}</div>
                                <div className="flex text-amber-500">
                                    {Array(amarulaPackage.stars).fill(0).map(() => <AiFillStar key={Math.random()}/>)}
                                </div>
                            </div>
                            <div className={"font-thin text-black/40 pt-3 text-sm"}>{amarulaPackage.description}</div>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
};

export default GridSlider;