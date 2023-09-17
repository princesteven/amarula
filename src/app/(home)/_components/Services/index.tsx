import React from 'react';
import Section from "@components/Section";
import {AiFillFire} from "react-icons/ai";
import {BiSolidHotel} from "react-icons/bi";
import {BsFillCupHotFill} from "react-icons/bs";
import ServiceTabContent from "../ServiceTabContent";
import ServiceTabs, {TabsProps} from "../ServiceTabs";
import {accommodationImage, campingImage, diningImage} from "../../../../../public/images";

/**
 * @function
 * @name Services
 * @description services offered by amarula hotel
 * @author Prince Erick Steven
 */
const Services = () => {
    const tabs: TabsProps[] = [
        {
            icon: <AiFillFire />,
            title: "Camping",
            content: <ServiceTabContent
                title={"Camping"}
                contentImage={campingImage}
                contentDescription={<div>
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
                </div>}
            />
        },
        {
            icon: <BsFillCupHotFill />,
            title: "Dining",
            content: <ServiceTabContent
                title={"Dining"}
                contentImage={diningImage}
                contentDescription={<div>
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
                </div>}
            />
        },
        {
            icon: <BiSolidHotel />,
            title: "Accommodation",
            content: <ServiceTabContent
                title={"Accommodation"}
                contentImage={accommodationImage}
                contentDescription={<div>
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
                </div>}
            />
        },
    ]

    return (
        <Section
            title={"Our great services"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, autem commodi cum cupiditate distinctio incidunt, ipsam ipsum laboriosam nulla numquam odio optio porro quae similique ut, velit veniam voluptates? Aliquid."}
        >
            <ServiceTabs tabs={tabs} />
        </Section>
    )
};

export default Services;