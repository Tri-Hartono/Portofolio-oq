'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
    const cursorRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const hovered = useRef(false);
    ``;

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const distX = mouseX.current - currentX.current;
            const distY = mouseY.current - currentY.current;

            // Adjust this value to make it faster (e.g. 0.3 for faster response)
            currentX.current += distX * 0.15;
            currentY.current += distY * 0.15;

            if (cursorRef.current) {
                const size = hovered.current ? 320 : 32;
                cursorRef.current.style.transform = `translate(${
                    currentX.current - size / 2
                }px, ${currentY.current - size / 2}px)`;
                cursorRef.current.style.width = `${size}px`;
                cursorRef.current.style.height = `${size}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const enter = () => {
            hovered.current = true;
            setIsHovered(true);
        };
        const leave = () => {
            hovered.current = false;
            setIsHovered(false);
        };

        const targets = document.querySelectorAll('.mask-target');
        targets.forEach((el) => {
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);
        });

        return () => {
            targets.forEach((el) => {
                el.removeEventListener('mouseenter', enter);
                el.removeEventListener('mouseleave', leave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-colors duration-300 mix-blend-difference`}
            style={{
                backgroundColor: '#EB5939',
                width: '32px',
                height: '32px',
            }}
        />
    );
}
