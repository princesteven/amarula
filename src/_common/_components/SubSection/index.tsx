import React from 'react';

interface SubsectionProps {
    children: React.ReactNode
}

/**
 * @function
 * @name Subsection
 * @description The subsection content of every section
 * @author Prince Erick Steven
 */
const Subsection: React.FC<SubsectionProps> = ({children}) => {
    return (
        // <div className="grid place-content-center">
        <div className="items-center">
            {children}
        </div>
    )
};

export default Subsection;