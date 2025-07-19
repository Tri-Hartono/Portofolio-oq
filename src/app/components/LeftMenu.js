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
        <div className='fixed left-0 z-20 p-6 lg:p-20  h-screen flex items-center justify-between flex-col'>
            <div>
                <FontAwesomeIcon icon={faSquarespace} className='w-10' />
            </div>
            <div className='space-y-10'>
                <FontAwesomeIcon
                    icon={faDribbble}
                    className='w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    className='w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='w-8 hover:text-[#EB5939]'
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className='w-8 hover:text-[#EB5939]'
                />
            </div>
        </div>
    );
}
