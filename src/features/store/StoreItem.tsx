import XYButton from '@/components/inputComponents/XYButton';
import { Item } from '@/types';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import React from 'react';

export interface StoreItemProps {
    itemDetails: Item;
}
export const StoreItem = ({ itemDetails }: StoreItemProps) => {
    const {
        name,
        description,
        imageUrl,
        longDescription,
        price,
        priceId,
        subTitle,
        quantity,
    } = itemDetails;
    //TODO create header and footer templates as needed - footer shold contain add to cart button

    const cardFooter = () => {
        return (
            <div className='flex p-2 justify-content-between'>
                <XYButton
                    label={`Add to Cart $${price}`}
                    xyType='transparentWhite'
                />
            </div>
        );
    };
    const cardHeader = () => {
        return (
            <div className='flex flex-column justify-content-center align-items-center'>
                <div className='flex align-items-center justify-content-center p-2'>
                    <Image src={imageUrl} alt={name} className='w-8' />
                </div>
            </div>
        );
    };
    return (
        <Card
            title={name}
            header={cardHeader}
            footer={cardFooter}
            className='w-8'
        >
            <p>{description}</p>
        </Card>
    );
};

export default StoreItem;
