'use client';
import React from 'react';
import Container from './components/Container';
import Cursor from './components/Cursor';
import AnimationText from './components/AnimationText';

export default function Hero() {
    return (
        <Container className='relative'>
            {/* <Cursor /> Kursor aktif */}
            <div className='text-center relative w-full h-screen flex items-center justify-center'>
                <div className='relative z-10 mask-target text-[6vw]  uppercase leading-[1]'>
                    <AnimationText text='MAKING' duration={0.6} as='h1' />
                    <AnimationText
                        text='ANYTHING'
                        className='text-color-3'
                        duration={1.2}
                        as='h1'
                    />
                    <AnimationText
                        text='ABOUT'
                        className='text-color-3'
                        duration={2.4}
                        as='h1'
                    />
                    <AnimationText text='VISUAL' duration={3.6} as='h1' />
                </div>
                <div className='absolute inset-0 bg-[url(/assets/image/bg-hero.png)]  bg-cover bg-center'>
                    {/* Optional: background video */}
                </div>
            </div>
        </Container>
    );
}
