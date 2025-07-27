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
        <div className='fixed left-0 top-0 z-20 pt-10 pb-20 px-6 lg:pt-20  lg:px-20   flex items-center justify-between flex-col h-[98vh] md:h-screen'>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered ? (
                    <>
                        <Image
                            src='/logo-white.png'
                            alt='logo'
                            width={100}
                            height={100}
                        />
                    </>
                ) : (
                    <>
                        <Image
                            src='/logo-yellow.png'
                            alt='logo'
                            width={100}
                            height={100}
                        />
                    </>
                )}
            </div>
            <div className='space-y-4 md:space-y-6 flex flex-col'>
                <FontAwesomeIcon
                    icon={faDribbble}
                    className='text-xl  lg:text-2xl text-color-3'
                />

                <FontAwesomeIcon
                    icon={faYoutube}
                    className='text-xl  lg:text-2xl text-color-3'
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-xl  lg:text-2xl text-color-3'
                />
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className='text-xl  lg:text-2xl text-color-3'
                />
            </div>
        </div>
    );
}
