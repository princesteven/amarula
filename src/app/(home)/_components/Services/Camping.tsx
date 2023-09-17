import React from 'react';
import Image from "next/image";
import {campingImage} from "../../../../../public/images";

/**
 * @function
 * @name Camping
 * @description Camping service
 * @author Prince Erick Steven
 */
const Camping = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-8 px-4 lg:px-0">
            <div className={"lg:col-span-2 flex flex-col space-y-4 md:ml-10 lg:ml-20"}>
                <div className="font-semibold">Camping</div>
                <div className="text-black/40">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
                        deleniti neque quod repudiandae voluptatum? Accusamus doloremque doloribus eligendi eum
                        excepturi
                        ipsam rem ut vero voluptate, voluptates. Amet, dicta, fugiat.
                    </p>
                    <p className={"mt-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
                        deleniti neque quod repudiandae voluptatum? Accusamus doloremque doloribus eligendi eum
                        excepturi
                        ipsam rem ut vero voluptate, voluptates. Amet, dicta, fugiat.
                    </p>
                    <p className={"mt-4"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
                        deleniti neque quod repudiandae voluptatum? Accusamus doloremque doloribus eligendi eum
                        excepturi
                        ipsam rem ut vero voluptate, voluptates. Amet, dicta, fugiat.
                    </p>
                </div>
            </div>
            <div className={"mx-auto w-11/12 lg:block lg:col-span-1"}>
                <Image
                    src={campingImage}
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

export default Camping;