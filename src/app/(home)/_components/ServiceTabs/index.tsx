'use client';

import React, {useState} from 'react';

export interface TabsProps {
    icon: React.ReactNode;
    title: string
    content: React.ReactNode | string;
}

interface ServiceTabsProps {
    tabs: TabsProps[];
    onChange?: (activeKey: number) => void;
}

/**
 * @function
 * @name ServiceTabs
 * @description Tabs describing each Amarula service
 * @author Prince Erick Steven
 */
const ServiceTabs: React.FC<ServiceTabsProps> = ({tabs, onChange}) => {
    const [activeKey, setActiveKey] = useState(0);

    return (
        <>
            <div className={"grid grid-cols-2 gap-8 border-b-2 lg:gap-0 lg:border-b-0 lg:flex lg:w-full lg:justify-center"}>
                {tabs.map((tab, index) => (
                    <div
                        className={`group mb-5 flex flex-col space-y-4 justify-center items-center font-semibold 
                        hover:cursor-pointer lg:pb-4 lg:px-28 lg:border-b-[3px]
                        ${activeKey === index ? "lg:border-b-amber-500 text-amber-500"
                            : "text-zinc-400 lg:hover:border-b-zinc-500 hover:text-zinc-500"}`}
                        key={Math.random()}
                        onClick={() => {
                            setActiveKey(index)
                            if (onChange) onChange(index)
                        }}
                    >
                        <div
                            className={`${activeKey === index ? "border-amber-500" : "group-hover:border-zinc-500"}
                        text-2xl border-[3px] rounded-full p-7 group-hover:translate-y-1`}
                        >
                            {tab.icon}
                        </div>
                        <div className={""}>{tab.title}</div>
                    </div>
                ))}
            </div>
            <div className={"py-4"}>{tabs[activeKey].content}</div>
        </>
    )
};

export default ServiceTabs;