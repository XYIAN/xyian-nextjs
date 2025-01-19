'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import XYButton from '../inputComponents/XYButton';

export interface BackToHomeProps {
    label?: string | undefined;
}

export const BackToHome = ({ label }: BackToHomeProps) => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
    };
    return (
        <XYButton
            xyType='whiteBlack'
            label={label ? label : 'Back To Home'}
            onClick={() => handleNavigateClick('')}
            className='p-3 mt-8'
        />
    );
};

export default BackToHome;
