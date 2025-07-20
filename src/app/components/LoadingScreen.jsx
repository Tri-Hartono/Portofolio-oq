'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className='fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black text-white'
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1 }}
                        className='text-4xl font-bold'
                    >
                        OQ BIHAIL
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
