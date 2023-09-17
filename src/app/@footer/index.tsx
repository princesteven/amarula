import React from 'react';

const Footer = () => {
    return (
        <div
            className={"z-50 bg-white text-sm h-20 w-full bottom-20 lg:bottom-0 border-t shadow-inner grid place-content-center"}
        >
            <div className="h-full py-3">
                <span className="text-amber-500 pl-3">&copy; Amarula Tree Hotel.</span> <span>All rights reserved</span>
            </div>
        </div>
    )
};

export default Footer;