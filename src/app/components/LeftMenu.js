import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDri, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
    faDribbble,
    faInstagram,
    faLinkedin,
    faSquarespace,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function LeftMenu() {
    return (
        <div className='fixed left-0 z-20 py-10 px-6 lg:py-20 lg:px-20  h-screen flex items-center justify-between flex-col'>
            <div>
                <FontAwesomeIcon icon={faSquarespace} className='w-10' />
            </div>
            <div className='space-y-2 md:space-y-10'>
                <FontAwesomeIcon
                    icon={faDribbble}
                    className='w-4 md:w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    className='w-4 md:w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='w-4 md:w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className='w-4 md:w-8 hover:text-[#EB5939]'
                />
            </div>
        </div>
    );
}
