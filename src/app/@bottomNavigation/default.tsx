'use client';

import React from "react";
import Link from "@components/Link";
import {GoInfo} from "react-icons/go";
import {AiOutlineHome} from 'react-icons/ai';
import {BsTelephoneOutbound} from "react-icons/bs";
import {HiOutlinePhotograph} from "react-icons/hi";

export default function BottomNavigation() {
    return (
        <div className={"z-50"}>
            <div className="block lg:hidden h-20 py-3 w-full bottom-0" />
            <div
                className="fixed h-20 bg-white py-3 border-t bottom-0 shadow-inner w-full grid place-content-center lg:hidden"
            >
                <div className="flex space-x-16">
                    <Link scroll={true} href={'#home'} title={'Home'} icon={<AiOutlineHome className={"text-2xl"}/>}/>
                    <Link scroll={true} href={'#services'} title={'Services'} icon={<GoInfo className={"text-2xl"}/>}/>
                    <Link scroll={true} href={'#gallery'} title={'Gallery'} icon={<HiOutlinePhotograph className={"text-2xl"}/>}/>
                    <Link scroll={true} href={'#contacts'} title={'Contact Us'} icon={<BsTelephoneOutbound className={"text-2xl"}/>}/>
                </div>
            </div>
        </div>
    )
}
