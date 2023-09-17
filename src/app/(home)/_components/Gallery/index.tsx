import React from 'react';
import Section from "@components/Section";
import Image from "next/image";
import {galleryImages} from "../../_db/gallery";

/**
 * @function
 * @name Gallery
 * @description Amarula gallery
 * @author Prince Erick Steven
 */
const Gallery = () => {
    return (

        <Section
            title={"Become Adventurous"}
            description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto eaque et explicabo
             facere hic id illum iusto laborum magni maxime, nemo nihil nisi quae quasi quibusdam quod reiciendis voluptatem.
             `}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                {galleryImages.map(galleryImage => <div className="w-full relative hover:cursor-pointer" key={Math.random()}>
                    <Image
                        src={galleryImage.image}
                        alt={galleryImage.title}
                        style={{
                            width: '100%',
                            height: '300px'
                        }}
                    />
                    <div className="group absolute left-0 top-0 w-full h-full hover:bg-black/60">
                        <div className="hidden group-hover:inline absolute bottom-0 py-4 px-6 uppercase font-semibold tracking-wider">
                            <div className="border-t-2 border-t-amber-500 w-10" />
                            <div className="pt-3 text-white">{galleryImage.title}</div>
                            <div className="text-amber-500">{galleryImage.subtitle}</div>
                        </div>
                    </div>
                </div>)}
            </div>

            <div className="grid place-content-center pt-7">
                <button className="bg-amber-500 text-white uppercase hover:bg-yellow-500 px-6 py-4">Load More</button>
            </div>
        </Section>
    )
};

export default Gallery;