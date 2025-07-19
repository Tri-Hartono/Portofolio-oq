'use client';
import React, { useState } from 'react';

export default function RightMenu() {
    const [soundOn, setSoundOn] = useState(true);

    const toggleSound = () => {
        setSoundOn((prev) => !prev);
    };

    return (
        <div className='fixed top-0 right-0 p-20 z-20 h-screen flex items-center justify-between flex-col'>
            <div className='space-y-2'>
                <h4 className='hover:text-[#EB5939]'>ABOUT</h4>
                <h4 className='hover:text-[#EB5939]'>WORK</h4>
                <h4 className='hover:text-[#EB5939]'>CONTACT</h4>
            </div>
            <h4
                onClick={toggleSound}
                className={`cursor-pointer -rotate-90 transition-transform duration-500 hover:scale-105 text-lg font-semibold ${
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
