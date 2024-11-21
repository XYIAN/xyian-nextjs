'use client'; // This marks the entire file as a Client Component
import { MenuModel } from '@/common/Menu/MenuModel';
import { PrimeReactProvider } from 'primereact/api';

export default function Login() {
    return (
        <PrimeReactProvider>
            <main>
                <MenuModel />
                <div className='flex justify-content-center pt-6'>
                    <h1>XYS Client Portal</h1>

                    <div></div>
                </div>
            </main>
        </PrimeReactProvider>
    );
}
