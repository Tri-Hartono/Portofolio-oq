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
        <div className='fixed left-0 top-0 z-20 pt-10 pb-20 px-6 lg:pt-20 lg:pb-20 lg:px-20   flex items-center justify-between flex-col h-[98vh] md:h-screen'>
            <div>
                <FontAwesomeIcon icon={faSquarespace} className='w-10' />
            </div>
            <div className='space-y-4 md:space-y-6'>
                <FontAwesomeIcon
                    icon={faDribbble}
                    className='w-4 md:w-6 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    className='w-4 md:w-6 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='w-4 md:w-6 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className='w-4 md:w-6 hover:text-[#EB5939]'
                />
            </div>
        </div>
    );
}
