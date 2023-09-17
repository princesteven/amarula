import React from 'react';
import Section from "@components/Section";
import ManagementSlider from "./ManagersSlider";

/**
 * @function
 * @name Managers
 * @description Show Amarula Managers
 * @author Prince Erick Steven
 */
const Managers = () => {
    return (
        <Section
            title={"Meet the management"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto eaque et explicabo
             facere hic id illum iusto laborum magni maxime, nemo nihil nisi quae quasi quibusdam quod reiciendis voluptatem.
             `}
        >
            <ManagementSlider/>
        </Section>
    )
};

export default Managers;