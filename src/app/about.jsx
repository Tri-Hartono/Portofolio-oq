import React from 'react';
import Container from './components/Container';
import Cursor from './components/Cursor';

export default function About() {
    return (
        <Container>
            <div className='flex flex-col justify-center padding-custome w-full h-full  gap-4 '>
                <h4 className=' mix-blend-difference mask-target'>ABOUT ME</h4>
                <h2 className='mix-blend-difference mask-target'>
                    {' '}
                    I’m a{' '}
                    <span className='text-[#EB5939]'>
                        selectively skilled
                    </span>{' '}
                    product designer with strong focus on producing high quality
                    and user-friendly digital products.
                </h2>
            </div>
        </Container>
    );
}
