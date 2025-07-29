import React from 'react';
import Container from './components/Container';
import AnimationText from './components/AnimationText';
import Image from 'next/image';

export default function Work() {
    // let Work = [
    //     {
    //         name: '3D',
    //     },
    //     {
    //         name: 'Visual',
    //     },
    //     {
    //         name: 'Motion',
    //     },
    //     {
    //         name: 'Product',
    //     },
    //     {
    //         name: 'Tutorial',
    //     },
    // ];
    return (
        <>
            <div className='w-screen overflow-x-hidden h-screen  py-10 flex flex-col items-center justify-center relative'>
                {/* Mouse */}
                <div className='absolute w-1/4 bg-[url(/assets/image/mouse_left_2.png)] h-1/2 bg-contain bg-no-repeat bg-center -left-[14%]   top-0'></div>
                <div className='absolute w-1/2 bg-[url(/assets/image/mouse_right.png)] h-full bg-contain bg-no-repeat bg-center -bottom-[20%] -right-[20%]'></div>
                {/* end mouse */}
                <div className='w-full relative hover:text-[#0d0d0d] padding-custome group cursor-pointer'>
                    <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out'></div>
                    {/* Top border line */}
                    <div className='absolute top-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Bottom border line */}
                    <div className='absolute bottom-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Main text */}
                    {/* <h1 className='z-10 relative transition-colors duration-500'>
                            {item.name}
                        </h1> */}
                    <AnimationText
                        text='3D'
                        as='h1'
                        className='z-10 relative transition-colors duration-500'
                    />
                </div>
                <div className='w-full relative hover:text-[#0d0d0d] padding-custome group cursor-pointer'>
                    <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out'></div>
                    {/* Top border line */}
                    <div className='absolute top-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Bottom border line */}
                    <div className='absolute bottom-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Main text */}
                    {/* <h1 className='z-10 relative transition-colors duration-500'>
                            {item.name}
                        </h1> */}
                    {/* <AnimationText
                        text='3D'
                        as='h1'
                        className='z-10 relative transition-colors duration-500'
                    /> */}
                    <div className='md:flex gap-2'>
                        <AnimationText
                            text='MOTION'
                            as='h1'
                            className='text-color-3 z-10 relative transition-colors duration-500 group-hover:text-white'
                        />
                        <AnimationText
                            text='GRAPHIC'
                            as='h1'
                            className='z-10 relative transition-colors duration-500'
                        />
                    </div>
                </div>
                <div className='w-full relative hover:text-[#0d0d0d] padding-custome group cursor-pointer'>
                    <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out'></div>
                    {/* Top border line */}
                    <div className='absolute top-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Bottom border line */}
                    <div className='absolute bottom-0 left-0 w-full h-[1px] bg-color-light opacity-50 z-10'></div>
                    {/* Main text */}
                    {/* <h1 className='z-10 relative transition-colors duration-500'>
                            {item.name}
                        </h1> */}
                    <div className='md:flex gap-2 group'>
                        <AnimationText
                            text='GRAPHIC'
                            as='h1'
                            className='z-10 relative transition-colors duration-500 '
                        />
                        <AnimationText
                            text='DESIGN'
                            as='h1'
                            className='z-10 text-color-3  relative transition-colors duration-500 group-hover:text-white'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
