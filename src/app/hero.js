import React from 'react';
import Container from './components/Container';

export default function Hero() {
    return (
        <Container className=''>
            <div className='text-center relative w-full h-full flex items-center justify-center'>
                <div className='relative z-10'>
                    <h1>MAKING </h1>
                    <h1 className='text-[#EB5939]'>GOOD</h1>
                    <h1 className='text-[#EB5939]'>SHIT</h1>
                    <h1>2009</h1>
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
