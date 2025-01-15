'use client';
import React from 'react';
import { STORE_ITEMS } from '@/constants';
import { Item } from '@/types';
import StoreItem from './StoreItem';

export interface StoreDisplayProps {
    itemList: Item[];
}
export const StoreDisplay = ({ itemList }: StoreDisplayProps) => {
    return (
        <div className='flex flex-column gap-5 justify-content-center align-items-center'>
            {itemList.map((item) => {
                return <StoreItem itemDetails={item} key={item.id} />;
            })}
        </div>
    );
};
