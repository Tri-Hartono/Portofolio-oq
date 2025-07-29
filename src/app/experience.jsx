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

    // const before = 'Over';
    const colored = '5 years';
    const after =
        ' of experience creating dynamic and engaging animations for a variety of media. My work includes projects for TV commercials,digital campaigns and social media content.';

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
                <span>{char === ' ' ? '\u00A0' : char}</span>
            </motion.h2>
        ));

    return (
        <Container>
            <motion.div
                ref={ref}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                className='flex flex-col justify-center padding-custome w-full h-full gap-4 relative z-20 bg-[url(/assets/image/bg-experience.png)]  bg-cover bg-center'
            >
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4 }}
                    className='mask-target'
                >
                    <span>Experience</span>
                </motion.h4>

                <motion.div className='mask-target'>
                    <span className=' text-2xl flex flex-wrap '>
                        {/* {renderText(before)} */}
                        {renderText(colored, 0, 'text-color-3 ')}
                        {renderText(after, 0, 'text-white ')}
                    </span>
                </motion.div>
            </motion.div>
        </Container>
    );
}
