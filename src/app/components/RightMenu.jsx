'use client';
import React, { useState, useRef } from 'react';

const menuItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'WORK', id: 'work' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECT', id: 'project' },
    { label: 'CONTACT', id: 'contact' },
];

export default function RightMenu() {
    const [soundOn, setSoundOn] = useState(false);
    const audioRef = useRef(null);

    if (!audioRef.current && typeof Audio !== 'undefined') {
        audioRef.current = new Audio('/assets/sound.mp3');
        audioRef.current.loop = true;
    }

    const toggleSound = () => {
        if (!soundOn) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setSoundOn((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className='fixed right-0 top-0 z-50 pt-10 pb-20 px-2 flex flex-col items-center justify-between h-[98vh] md:h-screen'>
            <div className=' space-y-1 md:space-y-2'>
                {menuItems.map((item) => (
                    <h4
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className='text-white hover:text-yellow-600 cursor-pointer'
                    >
                        {item.label}
                    </h4>
                ))}
            </div>

            <h4
                onClick={toggleSound}
                className={`cursor-pointer -rotate-90 transition-transform duration-500 hover:scale-105 mb-6 ${
                    soundOn ? 'text-color-3' : 'text-white'
                }`}
            >
                SOUND{' '}
                <span
                    className={`inline-block transition-all duration-500 text-color-3 ${
                        soundOn ? 'text-color-3' : 'text-white'
                    }`}
                >
                    {soundOn ? 'ON' : 'OFF'}
                </span>
            </h4>
        </div>
    );
}
