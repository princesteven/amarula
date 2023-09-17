'use client';

import Image from "next/image";
import Link from "@components/Link";
import {GoInfo} from "react-icons/go";
import {AiOutlineHome} from 'react-icons/ai';
import React, {useEffect, useState} from "react";
import logo from '../../../public/images/logo.jpg';
import {BsTelephoneOutbound} from "react-icons/bs";
import {HiOutlinePhotograph} from "react-icons/hi";

export default function Navigation() {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const windowScrollTop = window.scrollY;
        if (windowScrollTop > 20) {
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
                className={`hidden ${isSticky ? "lg:fixed" : ""} lg:top-0 lg:grid bg-white w-full px-10 pt-3 grid-cols-12 gap-8 shadow-lg border-b`}
            >
                <div className="col-span-3 flex justify-center">
                    <Image src={logo} alt={'Logo'} width={100} height={10}/>
                    <div className={"mt-5 font-semibold"}>
                        <span className={"text-amber-500"}>Amarula Tree</span> <span
                        className={"text-zinc-500"}>Hotel</span></div>
                </div>
                <div className="col-span-9 grid place-content-center">
                    <div className="flex space-x-16">
                        <Link href={'/'} title={'Home'}/>
                        <Link href={'/about'} title={'About'}/>
                        <Link href={'/gallery'} title={'Gallery'}/>
                        <Link href={'/contact-us'} title={'Contact Us'}/>
                    </div>
                </div>
            </div>

            {isSticky &&
                <button className={"fixed bottom-1/3 right-3 z-50"} onClick={scrollToTop}>Back to Top</button>}

            <div
                className="fixed h-auto bg-white py-3 border-t bottom-0 shadow-inner w-full grid place-content-center lg:hidden">
                <div className="flex space-x-16">
                    <Link href={'/'} title={'Home'} icon={<AiOutlineHome className={"text-2xl"}/>}/>
                    <Link href={'/about'} title={'About'} icon={<GoInfo className={"text-2xl"}/>}/>
                    <Link href={'/gallery'} title={'Gallery'} icon={<HiOutlinePhotograph className={"text-2xl"}/>}/>
                    <Link href={'/contact-us'} title={'Contact Us'}
                          icon={<BsTelephoneOutbound className={"text-2xl"}/>}/>
                </div>
            </div>
        </div>
    )
}
