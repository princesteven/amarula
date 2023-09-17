import React from 'react';
import Link from 'next/link';
import Image from "next/image";

interface SliderProps {
    image: any;
    classes: string;
    subtitle: string;
    title: string;
    btnText: string;
    link: string;
    animation: string[];
}

/**
 * @function
 * @name Slider
 * @description Component to style the slider displayed in the home screen
 * @param image
 * @param classes
 * @param subtitle
 * @param title
 * @param btnText
 * @param link
 * @param animation
 * @author Prince Steven
 */
const Slider = ({ image, classes, subtitle, title, btnText, link, animation }: SliderProps) => {
    return (
        <div className="relative h-[650px]">
            <Image src={image} alt="slider" layout={"fill"} objectFit={"cover"} objectPosition={"center"} />
            <div className="bg-black opacity-40 absolute left-0 right-0 top-0 w-full h-full"></div>
            <div className={`absolute top-1/3 ${classes} py-4 px-8 m-auto overflow-hidden uppercase hidden md:block`}>
                <div className="slider-subtitle">
                    <span className={`bg-zinc-800 tracking-[14px] text-white py-3 px-3 text-[14px] ${animation[0]}`}>{subtitle}</span>
                </div>
                <div className="text-white py-5 slider-title">
                    <h2 className={`text-2xl pt-3 font-black tracking-widest text-[38px] ${animation[1]}`}>{title}</h2>
                </div>
                <div className="text-white py-2 slider-btnText">
                    <button className={`hover:bg-yellow-500 bg-amber-500 py-3 px-2 ${animation[2]}`}>
                        <Link href={link}>{btnText}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider
