'use client';

import React from 'react';
import Section from '@components/Section';
import {contacts} from "../../_db/contacts";

/**
 * @function
 * @name Contacts
 * @description amarula contacts
 * @author Prince Erick Steven
 */
const Contacts = () => {
    return (
        <Section
            title={"Get in touch"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, autem commodi cum cupiditate distinctio incidunt, ipsam ipsum laboriosam nulla numquam odio optio porro quae similique ut, velit veniam voluptates? Aliquid."}
        >
            <div className="grid grid-cols-1 gap-3 px-10 md:grid-cols-2 xl:grid-cols-3">
                {contacts.map(contact => <div
                    className="flex space-x-4 border px-4 py-6 w-full bg-white"
                    key={Math.random()}
                >
                    <div className="text-white">
                        <div className={"rounded-full bg-amber-500 p-5 text-3xl"}>
                            {contact.icon}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <div className="font-semibold tracking-wider capitalize">{contact.title}</div>
                        {contact.contactDetails.map(contactDetail => <div
                            className="text-sm text-zinc-500 flex space-x-4"
                            key={Math.random()}
                        >
                            <div>{contactDetail.type}:</div>
                            <div>{contactDetail.value}</div>
                        </div>)}
                    </div>
                </div>)}
            </div>
            <div className="pt-4 w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3950761723063!2d35.86652271076631!3d-4.701231648875295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184bd5b27d6e5979%3A0xab0ee69f713a1646!2sAmarula%20Campsite!5e0!3m2!1sen!2stz!4v1694940470139!5m2!1sen!2stz" width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Section>
    )
};

export default Contacts;