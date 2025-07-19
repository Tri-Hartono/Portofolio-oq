import React from 'react';

export default function Container({ children }) {
    return (
        <div className='w-screen h-screen '>
            <div className='w-full h-full flex'>{children}</div>
        </div>
    );
}
