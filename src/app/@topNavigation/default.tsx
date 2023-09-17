'use client';

import Image from "next/image";
import Link from "@components/Link";
import {AiFillUpSquare} from "react-icons/ai";
import React, {useEffect, useState} from "react";
import logo from '../../../public/images/logo.jpg';

export default function TopNavigation() {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const windowScrollTop = window.scrollY;
        if (windowScrollTop > 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div
                className={`hidden ${isSticky ? "lg:fixed z-50" : ""} lg:top-0 lg:grid bg-white w-full px-10 pt-3 grid-cols-12 gap-8 shadow-lg border-b`}
            >
                <div className="col-span-3 flex justify-center">
                    <Image src={logo} alt={'Logo'} width={100} height={10}/>
                    <div className={"mt-5 font-semibold"}>
                        <span className={"text-amber-500"}>Amarula Tree</span> <span
                        className={"text-zinc-500"}>Hotel</span></div>
                </div>
                <div className="col-span-9 grid place-content-center">
                    <div className="flex space-x-16">
                        <Link scroll={true} href={'#home'} title={'Home'}/>
                        <Link scroll={true} href={'#services'} title={'Services'}/>
                        <Link scroll={true} href={'#gallery'} title={'Gallery'}/>
                        <Link scroll={true} href={'#contacts'} title={'Contact Us'}/>
                    </div>
                </div>
            </div>

            {isSticky && <AiFillUpSquare
                className={"fixed bottom-24 lg:bottom-10 text-amber-500 right-5 z-50 text-3xl hover:cursor-pointer animate-bounce"}
                onClick={scrollToTop}
            />}
        </div>
    )
}
