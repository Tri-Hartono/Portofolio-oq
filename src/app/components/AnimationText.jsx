'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimationText({
    text,
    className = '',
    as: Component = 'span', // Ubah default ke span
    delay = 0.06,
    duration = 0.4,
    ease = 'easeInOut',
    once = true,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                ease,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial='hidden'
            animate={isInView ? 'show' : 'hidden'}
            className={`mask-target ${className}`} // penting: .mask-target
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ whiteSpace: 'pre' }}
                    className='inline-block' // penting agar bisa dideteksi satuan
                >
                    <Component className='inline-block'>{char}</Component>
                </motion.span>
            ))}
        </motion.div>
    );
}
