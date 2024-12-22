import { Card } from 'primereact/card';
import React from 'react';
import XYButton from '../inputs/XYButton';
import Image from 'next/image';
import { Item } from '@/types';

export interface StoreCardProps {
    item: Item;
    showDetails: (itemDetails: Item) => void;
    closeDetails: () => void;
}
export const StoreCard = ({
    item,
    showDetails,
    closeDetails,
}: StoreCardProps) => {
    const { name, price, imageUrl, description } = item;
    const header = (
        <Image
            alt={`${name}-{${price}}`}
            src={`${
                imageUrl.length > 2
                    ? imageUrl
                    : 'https://primefaces.org/cdn/primereact/images/usercard.png'
            }`}
        />
    );
    const footer = (
        <>
            <XYButton
                label={`Buy $${price}`}
                icon='pi pi-cart-plus'
                onClick={() => showDetails(item)}
            />
            <XYButton
                label='Cancel'
                severity='secondary'
                icon='pi pi-times'
                //style={{ marginLeft: '0.5em' }}
                onClick={() => closeDetails()}
            />
        </>
    );
    return (
        <Card
            title='Advanced Card'
            subTitle='Card subtitle'
            footer={footer}
            header={header}
            className='md:w-25rem'
        >
            <p className='m-0'></p>
        </Card>
    );
};
