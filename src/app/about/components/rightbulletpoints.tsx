'use client'
import React, { useEffect } from 'react';
import '../styles/bulletpoints.scss';
import Image from 'next/image';

interface bulletPointProps {
    message : string,
    src : string
}

export default function RightBulletPoints({message, src } : bulletPointProps) {
   
    return (
            <div className='sameLine'>
                <p className='right paragraph'>{message}</p>
                <Image src={src} className="circular--square" alt='Image' width={50} height={50} />
            </div>
    );
}
