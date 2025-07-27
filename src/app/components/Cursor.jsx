'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
    const cursorRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const hovered = useRef(false);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const checkCollision = () => {
            const cursor = cursorRef.current;
            if (!cursor) return;

            const cursorRect = cursor.getBoundingClientRect();
            const targets = document.querySelectorAll('.mask-target span');
            let isAnyIntersecting = false;

            targets.forEach((target) => {
                const rect = target.getBoundingClientRect();
                const isIntersecting = !(
                    cursorRect.right < rect.left ||
                    cursorRect.left > rect.right ||
                    cursorRect.bottom < rect.top ||
                    cursorRect.top > rect.bottom
                );

                if (isIntersecting) {
                    isAnyIntersecting = true;
                    target.classList.add('active-text');
                } else {
                    target.classList.remove('active-text');
                }
            });

            hovered.current = isAnyIntersecting;
        };

        const animate = () => {
            const distX = mouseX.current - currentX.current;
            const distY = mouseY.current - currentY.current;

            currentX.current += distX * 0.1;
            currentY.current += distY * 0.1;

            if (cursorRef.current) {
                const size = hovered.current ? 320 : 32;
                cursorRef.current.style.transform = `translate(${
                    currentX.current - size / 2
                }px, ${currentY.current - size / 2}px)`;
                cursorRef.current.style.width = `${size}px`;
                cursorRef.current.style.height = `${size}px`;
            }

            checkCollision();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className='pointer-events-none fixed top-0 left-0 z-10 rounded-full bg-custome-light w-[32px] h-[32px] '
        />
    );
}
