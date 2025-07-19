import React from 'react';

export default function Container({ children }) {
    return (
        <div className='w-screen h-full md:h-screen'>
            <div className='w-full h-full flex py-20 md:py-0'>{children}</div>
        </div>
    );
}
