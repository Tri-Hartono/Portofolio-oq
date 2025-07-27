import { faPix } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
    return (
        <div className='pt-40 md:pt-60 pb-10 md:pb-20 padding-custome'>
            <div className='flex flex-col gap-4 md:flex-row justify-between'>
                <div className='space-y-2'>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Dribbble</h4>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Youtube</h4>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Likendin</h4>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Instagram</h4>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Facebook</h4>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-color-3'
                        />
                        <h4 className='hover:text-color-3'>Behance</h4>
                    </div>
                </div>
                <div>
                    <div className='space-y-2 hover:text-color-3'>
                        <h4>Email</h4>
                        <p>Email@gmail.com</p>
                    </div>
                    <div className='space-y-2 hover:text-color-3'>
                        <h4>Phone</h4>
                        <p>089263123xxxx</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
