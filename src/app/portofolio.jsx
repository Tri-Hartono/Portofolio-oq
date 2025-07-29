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
        <div className=' md:w-[70%] md:h-[90%] relative z-40'>
            <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                className='relative '
            >
                <CarouselContent>
                    {ImagePorfolio.Portofolio.map((item, index) => (
                        <CarouselItem key={index}>
                            <img
                                src={item.image}
                                alt={`Slide ${index}`}
                                className='w-full h-auto object-cover'
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='text-black bg-custome-light' />
                <CarouselNext className='text-black bg-custome-light' />
            </Carousel>

            {/* Dot indikator */}
            <div className='flex justify-center mt-4 gap-2'>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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
