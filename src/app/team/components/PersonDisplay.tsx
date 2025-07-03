import React, { useState, useEffect } from 'react';
import { Image } from 'primereact/image';
import { Skeleton } from 'primereact/skeleton';
import { MemberDetail } from '@/types';
import { Card } from 'primereact/card';

interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc, position, bio } = memberDetails;
    const [loading, setLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    // Fallback to show image after 3 seconds even if onLoad doesn't fire
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loading) {
                setLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [loading]);

    const handleImageLoad = () => {
        setLoading(false);
        setImageError(false);
    };

    const handleImageError = () => {
        setLoading(false);
        setImageError(true);
    };

    const CardHeaderImage = () => {
        return (
            <div className='flex justify-content-center align-content-center'>
                <div style={{ position: 'relative', width: 200, height: 200 }}>
                    {loading && (
                        <Skeleton
                            width='200px'
                            height='200px'
                            borderRadius='50%'
                        />
                    )}
                    {!loading && !imageError && (
                        <Image
                            src={imageSrc}
                            alt={name}
                            width='200'
                            height='200'
                            preview
                            imageClassName='border-round'
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    )}
                    {imageError && (
                        <div
                            style={{
                                width: 200,
                                height: 200,
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                color: '#666',
                            }}
                        >
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>
        );
    };
    return (
        <Card
            header={<CardHeaderImage />}
            title={<h3 className='p-0 m-0'>{name}</h3>}
            subTitle={position}
            className='w-full m-3 p-3 custom-card'
        >
            <p className=' pb-1'>{bio}</p>
        </Card>
    );
};
