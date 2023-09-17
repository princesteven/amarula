import React from 'react';

/**
 * @function
 * @name SlickDivider
 * @description Divider between title and content
 * @author Prince Erick Steven
 */
const SlickDivider = () => {
    return (
        <div className="relative">
             <div className="absolute inset-x-0 mx-auto bg-zinc-200 h-[3px] w-24" />
            <div className="absolute inset-x-0 mx-auto bg-amber-500 h-[3px] w-10" />
        </div>
    )
};

export default SlickDivider;