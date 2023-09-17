import React from 'react';
import Banner from "../_components/Banner";
import Gallery from "../_components/Gallery";
import Packages from "../_components/Packages";
import Services from "../_components/Services";
import Managers from "../_components/Managers";
import Contacts from "../_components/Contacts";

/**
 * @function
 * @name Home
 * @description Home page/landing page of the website.
 * @author Prince Erick Steven
 */
const Home = () => {
    return (
        <div>
            <div id="home">
                <Banner/>
            </div>
            <div id="services">
                <Services/>
                <Packages/>
            </div>
            <div id="gallery">
                <Gallery/>
            </div>
            <Managers/>
            <div id="contacts">
                <Contacts/>
            </div>
        </div>
    )
};

export default Home;