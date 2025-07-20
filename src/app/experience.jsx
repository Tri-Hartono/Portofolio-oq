'use client';
import React, { useRef } from 'react';
import Container from './components/Container';
import { motion, useInView } from 'framer-motion';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-20% 0px -20% 0px',
    });

    const before = 'Over';
    const colored = ' a decade';
    const after =
        ' of experience in interactive design and working with some of the most talented people in the business';

    const renderText = (text, delayOffset = 0, className = '') =>
        text.split('').map((char, i) => (
            <motion.h2
                key={delayOffset + i}
                initial={{ opacity: 0, y: 10 }}
                animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: (delayOffset + i) * 0.03 }}
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
                className='flex flex-col justify-center padding-custome w-full h-full gap-4'
            >
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4 }}
                    className='mix-blend-difference mask-target'
                >
                    Experience
                </motion.h4>

                <motion.div className='mix-blend-difference mask-target text-2xl flex flex-wrap '>
                    {renderText(before)}
                    {renderText(colored, before.length, 'text-[#EB5939]')}
                    {renderText(after, before.length + colored.length)}
                </motion.div>
            </motion.div>
        </Container>
    );
}
