'use client'; // This marks the entire file as a Client Component
import CloudBackground from '@/common/backgrounds/cloud/CloudBackground';
import { MenuModel } from '@/common/Menu/MenuModel';

export default function Contact() {
    return (
        <main>
            <MenuModel />
            <CloudBackground />

            {/* <div className='flex flex-column justify-content-center w-full align-items-center'>
                    <h1 className='pt-5 pb-5'>Contact XYIAN</h1>
                    <MainLinks />
                </div> */}
            {/* <ContactMe /> */}
        </main>
    );
}
