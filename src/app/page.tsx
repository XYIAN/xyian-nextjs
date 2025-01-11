'use client';
import Image from 'next/image';
import { MainLinks } from '@/components/links/MainLinks';
import '../styles/inputs/buttonHover.scss';
import LoginLink from '@/components/links/LoginLink';
const BOTTOM_PADDING = ` pb-4`;

export default function Home() {
    const backgroundImage = require('../../public/Primary.png');

    return (
        <main>
            <div
                className='flex flex-column pt-6 justify-content-center text-center align-items-center gap-3 mainBody m-0'
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    padding: '0rem 2rem',
                }}
            >
                <Image
                    src={backgroundImage}
                    alt='Image'
                    width='250'
                    className={` ${BOTTOM_PADDING}`}
                />
                <h1 className={`text-center m-0 ${BOTTOM_PADDING}`}>
                    XYIAN Software
                </h1>
            </div>
            <MainLinks />
            <p className=' flex align-items-center justify-content-center m-0 pb-1'>
                Existing Customers:&nbsp;
                <LoginLink />
            </p>
        </main>
    );
}
