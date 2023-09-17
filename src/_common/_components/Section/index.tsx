import React from 'react';
import SlickDivider from "@components/SlickDivider";
import SubSection from "@components/SubSection";

interface SectionProps {
    title: string;
    description: string | React.ReactNode
    children?: React.ReactNode;
}

/**
 * @function
 * @name Section
 * @description Component to indicate each section
 * @param props
 * @constructor
 */
const Section: React.FC<SectionProps> = ({ title, children, description}) => {
    return (
        <div>
            <div className={"py-24"}>
                <div className="text-center font-semibold capitalize text-2xl">{title}</div>

                <div className="py-6">
                    <SlickDivider/>
                </div>

                <div className="text-center text-black/40 px-32">{description}</div>
            </div>

            <div className="bg-zinc-100 relative w-full section-content py-14">
                <SubSection>{children}</SubSection>
            </div>
        </div>
    )
};

export default Section;