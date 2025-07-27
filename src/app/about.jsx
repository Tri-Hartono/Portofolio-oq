// 'use client';
// import React from 'react';
// import Container from './components/Container';
// import Cursor from './components/Cursor';

// export default function About() {
//     return (
//         <Container>
//             <div className='flex flex-col justify-center padding-custome w-full h-full  gap-4 bg-custome-dark mask-target relative   '>
//                 <span>
//                     <h4 className='z-10 relative '>ABOUT ME</h4>
//                 </span>
//                 <span>
//                     <h2 className=' z-10 relative text-white  '>
//                         {' '}
//                         Hi, I'm oq{' '}
//                         <span className='text-color-3 z-10 relative'>
//                             Motion graphic and design
//                         </span>{' '}
//                         based in Jakarta Indonesia. I focus on delivering
//                         impactful motion work that enhances brand communication
//                         across broadcast and digital platforms.
//                     </h2>
//                 </span>
//             </div>
//         </Container>
//     );
// }

'use client';
import React, { useRef } from 'react';
import Container from './components/Container';
import { motion, useInView } from 'framer-motion';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-20% 0px -20% 0px',
    });

    const before = "Hi, I'm oq";
    const colored = ' Motion graphic and design';
    const after =
        ' based in Jakarta Indonesia. I focus on delivering impactful motion work that enhances brand communication across broadcast and digital platforms.';

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
                className='flex flex-col justify-center padding-custome w-full h-full gap-4 relative z-20'
            >
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4 }}
                    className='mask-target'
                >
                    <span>About</span>
                </motion.h4>

                <motion.div className='mask-target'>
                    <span className=' text-2xl flex flex-wrap '>
                        {renderText(before, 0, 'text-white ')}
                        {renderText(colored, 0, 'text-color-3 ')}
                        {renderText(after, 0, 'text-white ')}
                    </span>
                </motion.div>
            </motion.div>
        </Container>
    );
}
