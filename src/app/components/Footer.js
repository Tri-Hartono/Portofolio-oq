import React from 'react';

export default function Footer() {
    return (
        <div className='md:pt-40 pb-10 md:pb-20 padding-custome'>
            <div className='flex flex-col md:flex-row md:items-center justify-between'>
                <div>
                    <h3 className='hover:text-[#EB5939]'>Dribbble</h3>
                    <h3 className='hover:text-[#EB5939]'>Youtube</h3>
                    <h3 className='hover:text-[#EB5939]'>LikedIn</h3>
                </div>
                <div>
                    <h3 className='hover:text-[#EB5939]'>Instagram</h3>
                    <h3 className='hover:text-[#EB5939]'>Facebook</h3>
                    <h3 className='hover:text-[#EB5939]'>Behance</h3>
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
