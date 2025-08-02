import Image from 'next/image';
import Video from 'next-video';
import Container from './components/Container';
import Footer from './Footer';
import About from './about';
import Work from './work';
import Hero from './hero';
import AnimationText from './components/AnimationText';
import Experience from './experience';
import Client from './client';
import Portfolio from './portofolio';

export default function Home() {
    return (
        <div className=''>
            <Hero />
            <div id='about'>
                <About />
            </div>
            <div id='work'>
                <Work />
            </div>

            {/* <div className='bg-[url(/assets/image/work-2400.jpg)] bg-fixed bg-cover bg-center'> */}
            <div className='bg-custome-dark w-full 0' id='experience'>
                {/* <Experience /> */}
                <div className='w-full py-10 bg-[url(/assets/image/bg-laptop.png)] bg-cover bg-center'>
                    <div className='w-full py-10 relative group hover:text-[#0d0d0d]'>
                        <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-custome-light opacity-50'></div>
                        <div className='flex padding-custome gap-6 md:gap-20 relative z-10'>
                            <AnimationText text='Now' as='h2' />
                            <div className='space-y-1'>
                                <AnimationText text='PSJTV' as='h2' />
                                <AnimationText
                                    text='Fantasy Interactive'
                                    as='p'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-10 relative group hover:text-[#0d0d0d]'>
                        <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-custome-light opacity-50'></div>
                        <div className='flex padding-custome gap-6 md:gap-20 relative z-10'>
                            <AnimationText text='2016' as='h2' />
                            <div className='space-y-1'>
                                <AnimationText text='RUANG GURU' as='h2' />
                                <AnimationText
                                    text='Fantasy Interactive'
                                    as='p'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-10 relative group hover:text-[#0d0d0d]'>
                        <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-custome-light opacity-50'></div>
                        <div className='flex padding-custome gap-6 md:gap-20 relative z-10'>
                            {/* <h2>2015</h2>
                            <div className='space-y-1'>
                                <h2>Art Director</h2>
                                <p>Fantasy Interactive</p>
                            </div> */}
                            <AnimationText text='2015' as='h2' />
                            <div className='space-y-1'>
                                <AnimationText text='LPMQ' as='h2' />
                                <AnimationText
                                    text='Fantasy Interactive'
                                    as='p'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-10 relative group hover:text-[#0d0d0d]'>
                        <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-custome-light opacity-50'></div>
                        <div className='flex padding-custome gap-6 md:gap-20 relative z-10'>
                            <AnimationText text='2014' as='h2' />
                            <div className='space-y-1'>
                                <AnimationText text='APLUSH' as='h2' />
                                <AnimationText text='Flash Designer' as='p' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-10 relative group hover:text-[#0d0d0d]'>
                        <div className='bg-custome-light absolute inset-0 z-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out'></div>
                        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-custome-light opacity-50'></div>
                        <div className='flex padding-custome gap-6 md:gap-20 relative z-10'>
                            {/* <h2>2015</h2>
                            <div className='space-y-1'>
                                <h2>Art Director</h2>
                                <p>Fantasy Interactive</p>
                            </div> */}
                            <AnimationText text='2015' as='h2' />
                            <div className='space-y-1'>
                                <AnimationText text='MARIMAS' as='h2' />
                                <AnimationText
                                    text='Fantasy Interactive'
                                    as='p'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Client /> */}
            </div>

            <div
                className='relative w-screen h-screen flex items-center justify-center '
                id='project'
            >
                <Portfolio />
            </div>
            <div id='contact'>
                <Footer />
            </div>
        </div>
    );
}
