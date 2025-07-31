'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreenWithSpinner() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const radius = 60;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (count / 100) * circumference;

    useEffect(() => {
        if (count < 100) {
            const interval = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 25); // durasi loading (100 * 25ms = 2.5s)
            return () => clearInterval(interval);
        } else {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 700); // delay sebelum fade out
            return () => clearTimeout(timeout);
        }
    }, [count]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className='fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-custome-dark text-color-3'
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 1 }}
                >
                    {/* <Image
                        src='/logo-oq.gif'
                        alt='logo'
                        width={100}
                        height={100}
                    /> */}
                    <img src='/assets/image/logo-oq.gif' alt='logo' />
                    {/* <div className='relative w-[150px] h-[150px]'> */}
                    {/* SVG Circle */}
                    {/* <svg
                            height='100%'
                            width='100%'
                            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                        >
                            Background circle
                            <circle
                                stroke='#0A376E'
                                fill='transparent'
                                strokeWidth={stroke}
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                            />
                            Progress circle */}
                    {/* <circle
                                stroke='#FDBB03'
                                fill='transparent'
                                strokeWidth={stroke}
                                strokeLinecap='round'
                                strokeDasharray={
                                    circumference + ' ' + circumference
                                }
                                strokeDashoffset={strokeDashoffset}
                                r={normalizedRadius}
                                cx={radius}
                                cy={radius}
                                style={{
                                    transition: 'stroke-dashoffset 0.2s ease',
                                }}
                            />
                        </svg> */}

                    {/* Percentage text */}
                    {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold'>
                            {count}%
                        </div>
                    </div> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
