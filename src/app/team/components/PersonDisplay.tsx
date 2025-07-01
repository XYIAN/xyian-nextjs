import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';
import { MemberDetail } from '@/types';
import { Card } from 'primereact/card';
import '../../../styles/displayCard.scss';
import '../../../styles/displayImage.scss';
import '../../../styles/_teamPage.scss';

interface PersonDisplayProps {
    memberDetails: MemberDetail;
}

export const PersonDisplay = ({ memberDetails }: PersonDisplayProps) => {
    const { name, imageSrc, position, bio } = memberDetails;
    const [loading, setLoading] = useState(true);

    const CardHeaderImage = () => {
        return (
            <div className='flex justify-content-center align-content-center'>
                <div style={{ position: 'relative', width: 120, height: 120 }}>
                    {loading && (
                        <Skeleton
                            width={120 + 'px'}
                            height={120 + 'px'}
                            borderRadius='50%'
                        />
                    )}
                    <Image
                        className='displayImage'
                        alt={name}
                        src={imageSrc}
                        width={120}
                        height={120}
                        style={{
                            display: loading ? 'none' : 'block',
                            borderRadius: '50%',
                        }}
                        onLoad={() => setLoading(false)}
                    />
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
