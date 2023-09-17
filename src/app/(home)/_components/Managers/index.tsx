import React from 'react';
import Section from "@components/Section";
import PackageSlider from "./PackageSlider";

/**
 * @function
 * @name Packages
 * @description Show Amarula Packages
 * @author Prince Erick Steven
 */
const Packages = () => {
    return (
        <Section
            title={"Affordable Packages"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto eaque et explicabo
             facere hic id illum iusto laborum magni maxime, nemo nihil nisi quae quasi quibusdam quod reiciendis voluptatem.
             `}
        >
            <PackageSlider/>
        </Section>
    )
};

export default Packages;