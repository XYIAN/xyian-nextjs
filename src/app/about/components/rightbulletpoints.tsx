'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';
import '../../../styles/about/bulletpoints.scss';

interface bulletPointProps {
    message: string;
    src: string;
}

export default function RightBulletPoints({ message, src }: bulletPointProps) {
    const [loading, setLoading] = useState(true);
    return (
        <div className='sameLine'>
            <p className='right paragraph'>{message}</p>
            {loading && (
                <Skeleton width='50px' height='50px' borderRadius='50%' />
            )}
            <Image
                src={src}
                className='circular--square'
                alt='Image'
                width={50}
                height={50}
                style={{
                    display: loading ? 'none' : 'block',
                    borderRadius: '50%',
                }}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
}
