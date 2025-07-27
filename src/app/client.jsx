'use client';
import React, { useRef } from 'react';
import Container from './components/Container';
import { motion, useInView } from 'framer-motion';

export default function Client() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, // agar bisa masuk/keluar viewport berkali-kali
        margin: '-20% 0px -20% 0px', // trigger lebih awal/sensitif
    });

    const before = 'I Worked With Some of the most ';
    const colored = 'innovative';
    const after = ' industry leaders to help build their top-notch products';

    const renderText = (text, delayOffset = 0, className = '') =>
        text.split('').map((char, i) => (
            <motion.h2
                key={delayOffset + i}
                initial={{ opacity: 0, y: 10 }}
                animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: i * 0.03 }}
                className={className}
            >
                {char === ' ' ? '\u00A0' : char}
            </motion.h2>
        ));

    return (
        <Container>
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='flex flex-col justify-center padding-custome w-full h-full gap-4 bg-custome-dark relative z-0'
            >
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4 }}
                    className=' mask-target'
                >
                    Client
                </motion.h4>

                <motion.div className=' mask-target flex flex-wrap '>
                    {renderText(before)}
                    {renderText(colored, before.length, 'text-color-3')}
                    {renderText(after, before.length + colored.length)}
                </motion.div>
            </motion.div>
        </Container>
    );
}
