// import React from 'react';
// import Container from './components/Container';

// export default function Hero() {
//     return (
//         <Container className=''>
//             <div className='text-center relative w-full h-screen flex items-center justify-center'>
//                 <div className='relative z-10'>
//                     <h1>MAKING </h1>
//                     <h1 className='text-[#EB5939]'>GOOD</h1>
//                     <h1 className='text-[#EB5939]'>SHIT</h1>
//                     <h1>2009</h1>
//                 </div>
//                 <div className='absolute inset-0'>
//                     <video
//                         autoPlay
//                         loop
//                         muted
//                         playsInline
//                         className='absolute inset-0 w-full h-full object-cover'
//                     >
//                         <source
//                             src='/assets/videos/hero.mp4'
//                             type='video/mp4'
//                         />
//                     </video>
//                 </div>
//             </div>
//         </Container>
//     );
// }

'use client';
import React from 'react';
import Container from './components/Container';
import Cursor from './components/Cursor'; // 💡 kamu harus bikin ini
import AnimationText from './components/AnimationText';

export default function Hero() {
    return (
        <Container className='relative'>
            <div className='text-center relative w-full h-screen flex items-center justify-center'>
                <div className='relative z-10 mask-target text-[6vw] font-black uppercase leading-[1] mix-blend-difference '>
                    <Cursor />
                    <AnimationText text='MAKING' duration='0.6' as='h1' />
                    <AnimationText
                        text='GOOD'
                        className='text-color-orange'
                        duration='1.2'
                        as='h1'
                    />
                    <AnimationText
                        text='SHIT'
                        className='text-color-orange'
                        duration='2.4'
                        as='h1'
                    />
                    <AnimationText text='SINCE' duration='3.6' as='h1' />
                    <AnimationText text='2009' as='h1' duration='4.8' />
                </div>
                <div className='absolute inset-0'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover'
                    >
                        <source
                            src='/assets/videos/hero.mp4'
                            type='video/mp4'
                        />
                    </video>
                </div>
            </div>
        </Container>
    );
}
