'use client';
import React, { useState } from 'react';

export default function RightMenu() {
    const [soundOn, setSoundOn] = useState(true);

    const toggleSound = () => {
        setSoundOn((prev) => !prev);
    };

    return (
        <div className='fixed right-0 top-0 z-20 pt-10 pb-20 px-2 mb:px-6 lg:pt-20 lg:pb-20 lg:px-20   flex items-center justify-between flex-col h-[98vh] md:h-screen'>
            <div className=''>
                <h4 className='text-color-3 hover:text-black'>ABOUT</h4>
                <h4 className='text-color-3 hover:text-black'>WORK</h4>
                <h4 className='text-color-3 hover:text-black'>CONTACT</h4>
            </div>
            <h4
                onClick={toggleSound}
                className={`cursor-pointer -rotate-90 transition-transform duration-500 hover:scale-105  mb-6 ${
                    soundOn ? 'text-white' : 'text-red-500'
                }`}
            >
                SOUND{' '}
                <span className='inline-block transition-all duration-500 text-color-3'>
                    {soundOn ? 'ON' : 'OFF'}
                </span>
            </h4>
        </div>
    );
}
