import React, { useEffect } from 'react';
import '../styles/bulletpoints.scss'
import Image from 'next/image';

interface bulletPointProps {
    message : string,
    src : string
}
export default function LeftBulletPoints({message, src } : bulletPointProps) {
    return (
        <div className='sameLine'>
            <Image src={src} className="circular--square leftImage" alt='Image' width={50} height={50} />
            <p className='left paragraph'>{message}</p>
        </div>
    );

}
