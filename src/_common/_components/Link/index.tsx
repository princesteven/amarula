'use client'

import React, {useEffect, useState} from 'react';
import Link, {LinkProps} from "next/link";
import {usePathname, useSearchParams} from "next/navigation";

interface CustomLinkProps extends LinkProps {
    title: string;
    icon?: React.ReactNode;
}

const CustomLink = (props: CustomLinkProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const [currentPath, setCurrentPath] = useState('#home');

    useEffect(() => {
        const {hash} = window.location

        if (hash) {
            setCurrentPath(hash)
            document.querySelector(hash)?.scrollIntoView({behavior: "smooth"});
        }
    }, [pathname, searchParams]);

    return (
        <Link
            href={props.href}
            className={`hover:text-amber-500 hover:cursor-pointer ${currentPath === props.href && "text-amber-500"}`}
        >
            <div className="grid place-content-center">{props?.icon}</div>
            <div>{props.title}</div>
        </Link>
    )
};

export default CustomLink;