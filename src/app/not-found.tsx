'use client';

import React from 'react';
import Image from 'next/image';
import XYButton from '@/components/inputComponents/XYButton';
import { useRouter } from 'next/navigation';
import { MainLinks } from '@/components';

const NotFound = () => {
    const router = useRouter();
    const returnToHome = () => {
        router.push('/');
    };

    return (
        <div className='pt-4 flex flex-column w-full h-full justify-items-center align-items-center gap-2'>
            <Image
                src='/svg-logos/XYIAN_Primary.svg'
                alt='XYIAN Logo'
                width={250}
                height={250}
                unoptimized
            />
            <h2 className='pt-2'>Uh-Oh! 404 Page Not Found.</h2>
            <XYButton
                xyType='transparentWhite'
                text
                onClick={returnToHome}
                label='Return to Home'
                className='mt-5 mb-5'
            />
            <MainLinks />
        </div>
    );
};

export default NotFound;
