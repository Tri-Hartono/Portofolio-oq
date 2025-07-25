'use client';
import React, { useState } from 'react';

export default function RightMenu() {
    const [soundOn, setSoundOn] = useState(true);

    const toggleSound = () => {
        setSoundOn((prev) => !prev);
    };

    return (
        <div className='fixed right-0 top-0 z-20 pt-10 pb-20 px-6 lg:pt-20 lg:pb-20 lg:px-20   flex items-center justify-between flex-col h-[98vh] md:h-screen'>
            <div className='md:space-y-2'>
                <h4 className='hover:text-[#EB5939]'>ABOUT</h4>
                <h4 className='hover:text-[#EB5939]'>WORK</h4>
                <h4 className='hover:text-[#EB5939]'>CONTACT</h4>
            </div>
            <h4
                onClick={toggleSound}
                className={`cursor-pointer -rotate-90 transition-transform duration-500 hover:scale-105 text-lg font-semibold mb-6 ${
                    soundOn ? 'text-inherit' : 'text-red-500'
                }`}
            >
                SOUND{' '}
                <span className='inline-block transition-all duration-500'>
                    {soundOn ? 'ON' : 'OFF'}
                </span>
            </h4>
        </div>
    );
}
