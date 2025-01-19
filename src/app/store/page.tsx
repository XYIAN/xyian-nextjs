'use client';
import { STORE_ITEMS } from '@/constants';
import { StoreDisplay } from '@/features';
import { NextPage } from 'next';

interface Props {}

export const Page: NextPage<Props> = ({}) => {
    return (
        <div className='pt-6'>
            <h1 className='p-2'>Xyian Apparel&trade;</h1>
            <StoreDisplay itemList={STORE_ITEMS} />
        </div>
    );
};

export default Page;
