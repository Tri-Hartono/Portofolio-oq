'use client';
import React from 'react';

import AnimationText from './components/AnimationText';
import Container from './components/Container';

export default function Footer() {
    return (
        <Container className='relative'>
            <div
                className='absolute inset-0 bg-[url(/assets/image/bg-hero.png)]  bg-cover bg-center'
                id='contact'
            >
                {/* Optional: background video */}
            </div>
            {/* <Cursor /> Kursor aktif */}
            <div className='text-center relative w-full h-screen flex items-center justify-center'>
                <div className='relative z-10 mask-target text-[6vw]  uppercase leading-[1]'>
                    <div className='flex gap-2'>
                        <AnimationText text='GOOD' duration={0.6} as='h1' />
                        <AnimationText
                            text='DESIGN'
                            className='text-color-3'
                            duration={1.2}
                            as='h1'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <AnimationText text='IS' duration={0.6} as='h1' />
                        <AnimationText
                            text='HONEST'
                            className='text-color-3'
                            duration={1.2}
                            as='h1'
                        />
                    </div>
                </div>
                <div className='absolute bottom-[10%] md:right-[10%] z-40 flex flex-col gap-2 items-start justify-start text-left'>
                    {/* Optional: background video */}
                    <div className=''>
                        <h4>EMAIL</h4>
                        <a
                            href='mailto:oq.bihail@gmail.com'
                            target='_blank'
                            className='text-gray-500'
                        >
                            oq.bihail@gmail.com
                        </a>
                    </div>
                    <div className=''>
                        <h4>PHONE</h4>
                        <a
                            href='https://wa.me/6285697727760'
                            target='_blank'
                            className='text-gray-500'
                        >
                            +62 856 9772 7760
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}
