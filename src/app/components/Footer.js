import { faPix } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
    return (
        <div className='md:pt-40 pb-10 md:pb-20 padding-custome'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center justify-between'>
                <div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Dribbble</h3>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Youtube</h3>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Likendin</h3>
                    </div>
                </div>
                <div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Instagram</h3>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Facebook</h3>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <FontAwesomeIcon
                            icon={faPix}
                            className='w-4 md:w-8 text-[#EB5939]'
                        />
                        <h3 className='hover:text-[#EB5939]'>Behance</h3>
                    </div>
                </div>
                <div>
                    <div className='space-y-2 hover:text-[#EB5939]'>
                        <h4>Email</h4>
                        <p>Email@gmail.com</p>
                    </div>
                    <div className='space-y-2 hover:text-[#EB5939]'>
                        <h4>Phone</h4>
                        <p>089263123xxxx</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
