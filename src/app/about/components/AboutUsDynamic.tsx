'use client';
// components/AboutUsDynamic.tsx

import React from 'react';
import { ABOUT_US } from '@/constants';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { AboutUsModel } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//style consts
const BOTTOM_MARGIN: string = '0 0 35vh 0 !important';
interface AboutUsProps {
    data: AboutUsModel[];
}

export const AboutUsDynamic: React.FC<AboutUsProps> = ({ data }) => {
    const getComponentByIndex = (item: (typeof ABOUT_US)[0], index: number) => {
        const components = [
            <HeroSection key={item.id} data={item} />,
            <SplitSection
                key={item.id}
                data={item}
                reverse={index % 2 !== 0}
            />,
            <ListCard key={item.id} data={item} />,
            <QuoteSection key={item.id} data={item} />,
            <ImageTextOverlay key={item.id} data={item} />,
        ];

        // Ensure no consecutive reuse of the same component
        return components[index % components.length];
    };

    return (
        <div className='about-us-dynamic'>
            {data.map((item, index) => getComponentByIndex(item, index))}
        </div>
    );
};

// HeroSection for prominent display
const HeroSection: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
    };
    return (
        <div
            className='hero-section text-center py-8 px-6'
            style={{
                background:
                    'linear-gradient(135deg,rgb(63, 65, 69),rgb(134, 134, 134))',
                color: '#fff',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                margin: BOTTOM_MARGIN,
            }}
        >
            <Image
                width={150}
                height={150}
                src={data.imageSrc}
                alt='Primary'
                className='mb-4'
                style={{ maxWidth: '180px', borderRadius: '50%' }}
            />
            {data.title.length > 1 && (
                <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
            )}
            <p className='text-lg leading-relaxed'>{data.text}</p>
            {data.id === 1 && (
                <Button
                    label='See Our Team'
                    icon='pi pi-arrow-right'
                    className='p-button-rounded p-button-outlined mt-5'
                    style={{ color: '#fff', borderColor: '#fff' }}
                    onClick={() => handleNavigateClick('team')}
                />
            )}
        </div>
    );
};

// SplitSection for alternating layouts
const SplitSection: React.FC<{
    data: (typeof ABOUT_US)[0];
    reverse?: boolean;
}> = ({ data, reverse }) => {
    return (
        <div
            className={classNames(
                'split-section flex align-items-center py-6 px-4 lg:flex-row md:flex-row flex-column',
                { 'flex-row-reverse': reverse },
                { 'gap-2 md:gap-8 lg:gap-12': true }
            )}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                margin: BOTTOM_MARGIN,
            }}
        >
            <div className='flex-1'>
                <Image
                    width={150}
                    height={350}
                    src={data.imageSrc}
                    alt='About Us'
                    className='w-full'
                    style={{
                        borderRadius: '12px',
                        //maxHeight: '300px',
                        objectFit: 'cover',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    }}
                />
            </div>
            <div className='flex-1'>
                <p className='text-lg leading-relaxed text-center lg:text-left'>
                    {data.text}
                </p>
            </div>
        </div>
    );
};

// ListCard for card-like display
const ListCard: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div className='list-card py-3 px-3'>
            <Card
                className='text-center'
                style={{
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                    background: 'rgba(255,255,255, .75)',
                    color: 'black',
                    margin: BOTTOM_MARGIN,
                }}
            >
                <i
                    className='pi pi-star text-4xl mb-4'
                    style={{
                        color: 'black',
                        textShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                    }}
                ></i>
                <p className='text-lg leading-relaxed '>{data.text}</p>
            </Card>
        </div>
    );
};

// QuoteSection for highlighting quotes or mission statements
const QuoteSection: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({ data }) => {
    return (
        <div
            className='quote-section text-center py-8 px-6'
            style={{
                fontStyle: 'italic',
                background:
                    'linear-gradient(135deg,rgb(10, 10, 10),rgb(0, 0, 0))',
                borderRadius: '12px',
                margin: BOTTOM_MARGIN,
                padding: '20px',
                color: 'white',
            }}
        >
            <h2>{data.title}</h2>
            <p className='text-2xl leading-relaxed '>{data.text}</p>
        </div>
    );
};

// ImageTextOverlay for modern overlay styles
const ImageTextOverlay: React.FC<{ data: (typeof ABOUT_US)[0] }> = ({
    data,
}) => {
    return (
        <div
            className='image-text-overlay relative w-full h-96'
            style={{
                backgroundImage: `url(${data.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                overflow: 'hidden',
                margin: BOTTOM_MARGIN,
            }}
        >
            <div
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center px-6'
                style={{ backdropFilter: 'blur(5px)' }}
            >
                <p className='text-lg leading-relaxed'>{data.text}</p>
            </div>
        </div>
    );
};

export default AboutUsDynamic;
