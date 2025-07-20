import React from 'react';
import Container from './components/Container';
import AnimationText from './components/AnimationText';

export default function Work() {
    let Work = [
        {
            name: '3D',
        },
        {
            name: 'Visual',
        },
        {
            name: 'Motion',
        },
        {
            name: 'Product',
        },
        {
            name: 'Tutorial',
        },
    ];
    return (
        <>
            <div className='w-full h-screen md:h-full py-10 flex flex-col items-center justify-center '>
                {Work.map((item, index) => (
                    <div
                        key={index}
                        className='w-full relative hover:text-[#0d0d0d] padding-custome group cursor-pointer'
                    >
                        <div className='bg-[#EB5939] absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out'></div>
                        {/* Top border line */}
                        <div className='absolute top-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                        {/* Bottom border line */}
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                        {/* Main text */}
                        {/* <h1 className='z-10 relative transition-colors duration-500'>
                            {item.name}
                        </h1> */}
                        <AnimationText
                            text={item.name}
                            as='h1'
                            className='z-10 relative transition-colors duration-500'
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
