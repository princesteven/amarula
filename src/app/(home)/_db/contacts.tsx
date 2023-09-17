import React from "react";
import {ImAddressBook, ImClock, ImLocation2} from "react-icons/im";

interface Contact {
    title: string;
    icon: any;
    contactDetails: {
        type: string;
        value: string;
    }[]
}

export const contacts: Contact[] = [
    {
        title: "Contact Info",
        icon: <ImAddressBook />,
        contactDetails: [
            {
                type: "Phone",
                value: "+255 712 345 678"
            },
            {
                type: "Email",
                value: "getintouch@amarula-wilderness.co.tz"
            },
            {
                type: "Tel",
                value: "+255 22 277 432123"
            },
        ]
    },
    {
        title: "Business Hours",
        icon: <ImClock />,
        contactDetails: [
            {
                type: "Mon - Fri",
                value: "00:00 hrs to 23:59 hrs (All day)"
            },
            {
                type: "Sat - Sun",
                value: "00:00 hrs to 23:59 hrs (All day)"
            },
        ]
    },
    {
        title: "Location",
        icon: <ImLocation2 />,
        contactDetails: [
            {
                type: "District",
                value: "Mikumi"
            },
            {
                type: "Region",
                value: "Morogoro"
            },
            {
                type: "Country",
                value: "Tanzania"
            },
        ]
    },
]