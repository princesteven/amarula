import React from 'react'
import { Link } from "@reach/router";

const Slider = ({ image, classes, subtitle, title, btnText, link, animation }) => {
    return (
        <div className="relative">
            <img src={image} alt="slider"/>
            <div className="bg-black-overlay absolute left-0 top-0 w-full h-full"></div>
            <div className={`absolute top-1/3 ${classes} py-4 px-8 m-auto overflow-hidden font-poppins uppercase hidden md:block`}>
                <div className="slider-subtitle">
                    <span className={`bg-transparent-black tracking-14px text-white py-3 px-3 text-14px ${animation[0]}`}>{subtitle}</span>
                </div>
                <div className="text-white py-5 slider-title">
                    <h2 className={`text-2xl pt-3 font-black tracking-widest text-38px ${animation[1]}`}>{title}</h2>
                </div>
                <div className="text-white py-2 slider-btnText">
                    <button className={`bg-yellow hover:bg-hover py-3 px-2 ${animation[2]}`}>
                        <Link to={link}>{btnText}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider
