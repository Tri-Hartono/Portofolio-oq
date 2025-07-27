import Image from 'next/image';
import Video from 'next-video';
import Container from './components/Container';
import Footer from './components/Footer';
import About from './about';
import Work from './work';
import Hero from './hero';
import AnimationText from './components/AnimationText';
import Experience from './experience';
import Client from './client';

export default function Home() {
    return (
        <div className=''>
            <Hero />
            <About />
            <Work />

            {/* <div className='bg-[url(/assets/image/work-2400.jpg)] bg-fixed bg-cover bg-center'> */}
            <div className='bg-custome-dark w-full 0'>
                <Experience />
                <div className='bg-custome-dark w-full py-10'>
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
                            <AnimationText text='Fantasy Interactive' as='p' />
                        </div>
                    </div>
                </div>
                {/* <Client /> */}
            </div>

            <div className='relative w-screen h-screen bg-red-500'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover'
                >
                    <source src='/assets/videos/reel.mp4' type='video/mp4' />
                </video>
            </div>
            <Footer />
        </div>
    );
}

{
    /* <div cl'ss="scroll-paragraph-mask js-scroll-paragraph-mask is-mas'i
    ng"><div cl'ss="'ine" st'le="--size:'0
        %;">{'O'}
        ver <strong st'le="display: inline-block; position: relat'v
            e;">a de
        cade</str{'o'}
        ng> of experi
    ence</
    div><div cl'ss="'ine" st'le="--size:'0
        %;">in interactive design
     and</
    div><div cl'ss="'ine" st'le="--size:'0
        %;">working with some of the 
    most</
    div><div cl'ss="'ine" st'le="--size: 38.8'9
        %;">talented people in the busi
    ness</
div></;div> */
}
