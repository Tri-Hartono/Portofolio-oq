'use client';
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
import Image from 'next/image';
import SvgLogo from './SvgLogo';

export default function LeftMenu() {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div className='fixed left-0 top-0 z-40 pt-10 pb-20 px-2 mb:px-6   lg:px-20   flex items-center justify-between flex-col h-[98vh] md:h-screen'>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src='/assets/image/logo-oq.png'
                    alt='logo'
                    className='w-20 h-20 md:w-24 md:h-24'
                />
            </div>
            <div className='space-y-4 md:space-y-6 flex flex-col z-20 relative'>
                <FontAwesomeIcon
                    icon={faDribbble}
                    className='text-lg  lg:text-2xl text-color-3 hover:text-black'
                />

                <FontAwesomeIcon
                    icon={faYoutube}
                    className='text-lg  lg:text-2xl text-color-3 hover:text-black'
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-lg  lg:text-2xl text-color-3 hover:text-black'
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className='text-lg  lg:text-2xl text-color-3 hover:text-black'
                />
            </div>
        </div>
    );
}
