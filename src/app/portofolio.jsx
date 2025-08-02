'use client';

import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import ImagePorfolio from '@/data/Portofolio.json';

export default function Portfolio() {
    const [carouselApi, setCarouselApi] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        if (!carouselApi) return;

        const updateCarouselState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());
            setTotalItems(carouselApi.scrollSnapList().length);
        };

        updateCarouselState();

        carouselApi.on('select', updateCarouselState);

        return () => {
            carouselApi.off('select', updateCarouselState);
        };
    }, [carouselApi]);

    const scrollToIndex = (index) => {
        carouselApi?.scrollTo(index);
    };

    return (
        <div className='w-[80%] md:h-[90%]  z-40 relative'>
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                className='  w-full'
            >
                <CarouselContent x={false}>
                    {ImagePorfolio.Portofolio.map((item, index) => (
                        <CarouselItem key={index}>
                            <img
                                src={item.image}
                                alt={`Slide ${index}`}
                                className='w-full h-auto  object-cover'
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='absolute  left-10 top-1/2 '>
                    <CarouselPrevious className='text-black bg-custome-light' />
                </div>
                <div className='absolute  right-10 top-1/2 '>
                    <CarouselNext className='text-black bg-custome-light' />
                </div>
            </Carousel>

            {/* Dot indikator */}
            <div className='flex justify-center mt-4 gap-2'>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                            currentIndex === index
                                ? 'bg-custome-light'
                                : 'bg-black'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
