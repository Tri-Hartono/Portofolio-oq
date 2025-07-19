import React from 'react';
import Container from './components/Container';

export default function About() {
    return (
        <Container>
            <div className='flex flex-col justify-center padding-custome w-full h-full gap-4'>
                <p>ABOUT ME</p>
                <h2>
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
