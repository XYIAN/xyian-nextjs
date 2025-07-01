import React, { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';

interface ImgTextDisplayProps {
    imgSrc: string;
    alt: string;
    width?: number;
    height?: number;
}

const ImgTextDisplay = ({
    imgSrc,
    alt,
    width = 200,
    height = 200,
}: ImgTextDisplayProps) => {
    const [loading, setLoading] = useState(true);
    return (
        <div style={{ position: 'relative', width, height }}>
            {loading && (
                <Skeleton
                    width={width + 'px'}
                    height={height + 'px'}
                    borderRadius='12px'
                />
            )}
            <Image
                src={imgSrc}
                alt={alt}
                width={width}
                height={height}
                style={{
                    display: loading ? 'none' : 'block',
                    borderRadius: 12,
                }}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default ImgTextDisplay;
