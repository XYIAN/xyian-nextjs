'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import XYButton from '../inputs/XYButton';

export const EmailLink = () => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
    };
    return (
        <XYButton
            xyType='white'
            link
            onClick={() => handleNavigateClick('login')}
        >
            <strong>Login HERE</strong>
        </XYButton>
    );
};
