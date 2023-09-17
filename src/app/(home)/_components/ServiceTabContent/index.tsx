import React from 'react';
import Image from "next/image";

interface ServiceTabContent {
    title: string;
    contentDescription: React.ReactNode;
    contentImage: any;
}

/**
 * @function
 * @name ServiceTabContent
 * @description Show the content of the service
 * @param title
 * @param contentDescription
 * @param contentImage
 * @author Prince Erick Steven
 */
const ServiceTabContent: React.FC<ServiceTabContent> = ({ title, contentDescription, contentImage }) => {
    return (
        <div className="grid lg:grid-cols-3 gap-8 px-4 lg:px-0">
            <div className={"lg:col-span-2 flex flex-col space-y-4 md:ml-10 lg:ml-20"}>
                <div className="font-semibold">{title}</div>
                <div className="text-black/40">{contentDescription}</div>
            </div>
            <div className={"mx-auto w-11/12 lg:block lg:col-span-1"}>
                <Image
                    src={contentImage}
                    alt={'Camping Image'}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    )
};

export default ServiceTabContent;