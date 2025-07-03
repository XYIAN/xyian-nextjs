import React, { useState } from 'react';

import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';

interface bulletPointProps {
    message: string;
    src: string;
}
export default function LeftBulletPoints({ message, src }: bulletPointProps) {
    const [loading, setLoading] = useState(true);
    return (
        <div className='sameLine'>
            {loading && (
                <Skeleton width='50px' height='50px' borderRadius='50%' />
            )}
            <Image
                src={src}
                className='circular--square leftImage'
                alt='Image'
                width={50}
                height={50}
                style={{
                    display: loading ? 'none' : 'block',
                    borderRadius: '50%',
                }}
                onLoad={() => setLoading(false)}
            />
            <p className='left paragraph'>{message}</p>
        </div>
    );
}
