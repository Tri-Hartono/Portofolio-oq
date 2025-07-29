import React from 'react';

export default function Container({ children }) {
    return (
        <div className='w-screen h-screen relative'>
            <div className='w-full h-full '>{children}</div>
        </div>
    );
}
