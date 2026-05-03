'use client';
import Image from 'next/image';
import { MainLinks } from '@/components/links/MainLinks';
import { LoginLink } from '@/components/links/LoginLink';

const BOTTOM_PADDING = 'pb-4';

export default function Home() {
    return (
        <main>
            <div
                className='flex flex-column justify-content-center text-center align-items-center gap-3 mainBody'
                style={{
                    padding: '0rem 2rem',
                    marginTop: '15vh',
                }}
            >
                <Image
                    src='/svg-logos/XYIAN_Primary.svg'
                    alt='XYIAN Logo'
                    width={250}
                    height={250}
                    className={BOTTOM_PADDING}
                    priority
                    unoptimized
                />
                <h3 className={`text-center ${BOTTOM_PADDING}`}>
                    Personalized solutions at your fingertips
                </h3>
            </div>
            <MainLinks />
            <p className='flex align-items-center justify-content-center m-0 pb-1 pt-4'>
                Existing Customers:&nbsp;
                <LoginLink />
            </p>
            <h6 className='text-center justify-content-center p-0 m-0 underline'>
                <a href='mailto:support@xyian.com' target='_blank' rel='noopener noreferrer'>
                    New Customers
                </a>
            </h6>
        </main>
    );
}
